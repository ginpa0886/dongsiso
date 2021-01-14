const express = require('express');
const userDate = require('./models/user');
const {getSalt, getExpiredTime, getHash} =require('./lib/hash')

const router = express.Router();

const connectStatus = {}

// url - user로 들어오면 실행되는 곳
router.route('/')
  // 유저 목록을 조회 API
  .get(async (req, res, next) =>{
    const page = req.query.page === undefined ? 1 : +req.query.page;
    const pageSize = req.query.pageSize === undefined ? 2 : +req.query.pageSize;

    try{
      const users = await userDate.findAll({
        attributes:['id', 'name'],
        limit: pageSize,
        offset: (page - 1) * pageSize,
      });
      res.json(users);
    }catch(err){
      console.error(err);
      next(err);
    }
  })
  // 유저 생성 API
  .post(async (req, res, next) =>{
    const {id, pw, name} = req.body
    const salt = getSalt();

    if (!id) {
      res.status(400).json({message: '"id"가 입력되지 않았습니다.'})
      return
    }
    if (!pw) {
      res.status(400).json({message: '"pw"가 입력되지 않았습니다.'})
      return
    }
    if (!name) {
      res.status(400).json({message: '"name"가 입력되지 않았습니다.'})
      return
    }
    
    try{
      await userDate.create({
        id,
        salt,
        pw: getHash(pw, salt),
        name,
        enabled: 'enable'
      });
      res.status(201).json({
        id,
        name,
      });
    }catch(err){
      console.error(err);
      next(err);
    }
  });

// 유저 로그인 API
router.post('/signin', async(req, res) => {
  const { id, pw } = req.body;
  try{
    const user = await userDate.findOne({
      where: {
        id: id,
      }
    })

    if(!user){
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

  } catch(err) {
    console.error(err);
  }
})
  
// 로그인 되었는지 확인하는 미들웨어 생성
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
router.get('/:id', async (req, res) =>{
  const { id } = req.params;
  const user = await userDate.findOne({
    where: {
      id: id,
    }
  })

  if (!user) {
    console.log("1111111111111111111111111111111");
    res.status(404).json({})
    return
  }
  res.json({
    id,
    name: user.name,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  })
});

router.patch('/:id', async (req, res) => {
  const {id} = req.params
  const {pw, name, enabled} = req.body
  const user = await userDate.findOne({
    where: {
      id: id,
    }
  })
  if (!user) {
    res.status(400).json({})
    return
  }

  const saltPw = getHash(pw, user.salt);
  const changeUser = { id, saltPw, name, enabled }

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
    try{
      await userDate.update({
        pw: changeUser.saltPw,
        name: changeUser.name,
        enabled: changeUser.enabled,
        updatedAt: new Date() 
      },{
        where:{
          id: id
        },
      });

      res.json({message: '유저데이터 수정에 성공하였습니다.'})
    } catch(err) {
      console.error(err);
    }
  }
})

// 유저 삭제 API
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  try{
    const user = await userDate.findOne({
      where: {
        id: id,
      }
    })
    if (!user) {
      res.status(404).json({})
      return
    }
  
    await userDate.update({
      enabled: 'disable'
    },{
      where: {
        id: id
      },
    });
  
    res.status(204).send()
  }catch(err){
    console.error(err);
  }
})

  module.exports = router;
  