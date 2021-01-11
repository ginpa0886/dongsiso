const {Router} = require('express')

const userModel = require('./user')
const service = require('./user-service')
const {getSalt, getExpiredTime, getHash} = require('../lib/hash')

const router = Router()

const connectStatus = {}

// 유저 목록을 조회 API
router.get('/', async (req, res) => {
  const page = req.query.page === undefined ? 1 : +req.query.page
  const pageSize = req.query.pageSize === undefined ? 2 : +req.query.pageSize

  const userlist = await service.userList(page,pageSize);

  res.json(userlist);
  

  // const offset = (page - 1) * pageSize
  // const items = users.slice(offset, offset + pageSize).map(({pw, enable, ...user}) => user)

  // res.json({
  //   items,
  //   page,
  //   pageSize,
  //   total: users.length
  // })
})

// 유저 생성 API
router.post('/', async (req, res) => {
  const {id, pw, name} = req.body
  if (!pw) {
    res.status(400).json({message: '"pw"가 입력되지 않았습니다.'})
    return
  }
  if (!name) {
    res.status(400).json({message: '"name"가 입력되지 않았습니다.'})
    return
  }

  const salt = getSalt()
  const user = {
    id,
    salt,
    pw: getHash(pw, salt),
    name,
    enabled: 'enable'
  }
  const [newId] = await service.userCreate(user)

  res.json({
    id,
    name: user.name
  })
})

// 유저 로그인 API
router.post('/signin', async (req, res) => {
  // 로그인 API 구현
  const {id, pw} = req.body
  const user = await service.userLogin(id)
  if (!user) {
    res.status(404).json({})
    return
  }

  if (user.pw !== getHash(pw, user.salt)) {
    res.status(401).json({message: '입력하신 비밀번호가 올바르지 않습니다.'})
    return
  }

  const token = getSalt()
  const expired = getExpiredTime()
  connectStatus[id] = {
    token, expired
  }

  res.json({
    token, expired
  })
})

// 로그인이 되었는지 확인하는 미들웨어 생성
router.use('/:id', (req, res, next) => {
  const {id} = req.params
  if (!id) {
    res.status(404).json({})
  }

  const connection = connectStatus[id]
  if (!connection) {
    res.status(401).json({message: '해당 계정의 로그인 기록이 없습니다.'})
    return
  }

  const token = req.headers['_token_']
  if (!token) {
    res.status(401).json({message: 'token 정보를 입력해주세요.'})
    return
  }

  if (token !== connection.token) {
    res.status(401).json({message: 'token 정보가 올바르지않습니다.'})
    return
  }

  if (Date.now() > connection.expired) {
    res.status(401).json({message: '해당 계정의 로그인 접속시간이 만료되었습니다.'})
    return
  }

  // token 만료시간 갱신
  connection.expired = getExpiredTime()

  next()
})

// 유저 상세 조회 API
router.get('/:id', async (req, res) => {
  const {id} = req.params
  const user = await service.userFindById(id);
  // const user = USER_DATA.find(user => {
  //   if (user.enable === 'disable') return false
  //   return user.id === id
  // })
  if (!user) {
    res.status(404).json({})
    return
  }

  res.json({
    id,
    name: user.name,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  })
})

// 유저 수정 API
router.patch('/:id', async (req, res) => {
  const {id} = req.params
  const {pw, name, enabled} = req.body

  const user = await service.userFindById(id);

  const saltPw = getHash(pw, user.salt);
  const changeUser = { id, saltPw, name, enabled }
  
  if (!user) {
    res.status(400).json({})
    return
  }
  
  // 앞서 요청한 자료의 조건들을 확인하는 곳
  const updateData = []
  if (saltPw !== user.pw) {
    updateData.push({key: 'pw', data: saltPw})
  }
  if (name !== user.name) {
    updateData.push({key: 'name', data: name})
  }
  if (enabled !== user.enabled) {
    updateData.push({key: 'enabled', data: enabled})
  }

  if (updateData.length === 0) {
    res.status(400).json({message: '수정된 값이 존재하지 않습니다.'})
    return
  } else {
    const updateUser = await service.userUpdate(changeUser);

    res.json({message: '유저데이터 수정에 성공하였습니다.'})
  }

  // updateData.forEach(({key, data}) => {
  //   user[key] = data
  // })

  
})

// 유저 삭제 API
router.delete('/:id', async (req, res) => {
  const {id} = req.params
  const user = await service.userFindById(id);
  if (!user) {
    res.status(404).json({})
    return
  }

  const deleteUser = await service.userDelete(id);

  res.status(204).send()
})

module.exports = router
