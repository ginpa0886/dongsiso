const express = require('express');
const {Router} = require('express')
const path = require('path');
const multer = require('multer');
const fs = require('fs');



const userModel = require('./user');
const hash = require('../lilb/hash');


const { urlencoded } = require('body-parser');
const { nextTick } = require('process');
const app = express();



const router = Router()

let USER_DATA = [
  new userModel('red','adce94c54b913eb4bbdb50103348208dc3ea4eb8f0a0b8336d9b62b353c0e47b', '1111', '누구개1', 'enable', new Date(), new Date()),
  new userModel('blue','adce94c54b913eb4bbdb50103348208dc3ea4eb8f0a0b8336d9b62b353c0e47b', '1111', '누구개2', 'enable', new Date(), new Date()),
  new userModel('yellow','adce94c54b913eb4bbdb50103348208dc3ea4eb8f0a0b8336d9b62b353c0e47b', '1111', '아무개3', 'enable', new Date(), new Date()),
  new userModel('pink','adce94c54b913eb4bbdb50103348208dc3ea4eb8f0a0b8336d9b62b353c0e47b', '1111', '아무개4', 'enable', new Date(), new Date()),
  new userModel('black','adce94c54b913eb4bbdb50103348208dc3ea4eb8f0a0b8336d9b62b353c0e47b', '1111', '누구개5', 'disable', new Date(), new Date()),
  new userModel('gold','adce94c54b913eb4bbdb50103348208dc3ea4eb8f0a0b8336d9b62b353c0e47b', '1111', '아무개6', 'enable', new Date(), new Date())
]


//TODO
// 유저 생성 salt를 사용하여 유저를 생성하도록 수정
// 로그인시 암호화를 사용해서 유저의 비밀번호를 비교

const connectStatus = {};
const userFindById = id => USER_DATA.find(user => user.id === id);

// 

// 유저 목록을 조회 APIs
router.get('/list', (req, res) => {
  
  const page = req.query.page === undefined ? 1 : +req.query.page
  const pageSize = req.query.pageSize === undefined ? 2 : +req.query.pageSize
  const name = req.query.name

  if (isNaN(page)) {
    res.status(400).json({message: 'page의 값이 숫자가 아닙니다.'})
    return
  }
  if (isNaN(pageSize)) {
    res.status(400).json({message: 'pageSize의 값이 숫자가 아닙니다.'})
    return
  }

  const users = USER_DATA.filter(user => {
    if (user.enable === 'disable') return false

    if (name) {
      if (!user.name.includes(name)) return false
    }

    return true
  })

  const offset = (page - 1) * pageSize
  const items = users.slice(offset, offset + pageSize).map(({salt, pw, enable, ...user}) => user)

  res.json({
    items,
    page,
    pageSize,
    total: users.length
  })
})

//유저 생성 API
router.post('/', (req, res) => {
    // console.log('post 실행됨');
    // console.log(22222, req.params); // 값 없음
    // console.log(33333, req.query); // 값 없음
    const { id, pw, name, enable } = req.body;
    
    

    if(id === undefined){
      res.status(400).json({err: 'id를 입력하지 않았습니다.'});
      return
    }
    if(pw === undefined){
      res.status(400).json({err: 'pw를 입력하지 않았습니다.'});
      return
    }
    if(name === undefined){
      res.status(400).json({err: 'name를 입력하지 않았습니다.'});
      return
    }
    if(enable === undefined){
      res.status(400).json({err: 'enable를 입력하지 않았습니다.'});
      return
    }


    // 검사 후에 데이터베이스에 값을 입력함


    // TODO 1번
    // 이제 넣기 전에 hash를 한 다음에 집어 넣는 형태로 만들 것임
    const salt = hash.getSalt();
    const hashedPw = hash.getHash(pw, salt);
    
    USER_DATA.push({ id, salt, hashedPw, name, enable });

   

    // 데이터 저장 시키는 함수 실행
    

    res.send(`등록되었습니다. ${req.body.id}님`);
    
  })

// 유저 로그인
router.post('/signin', (req, res) => {
  // 로그인 API 구현
  
  const {id, pw} = req.body;
  const user = userFindById(id);

  // // 이부분 확인을 해봐야 할것 같네요.
  // const {salt} = USER_DATA.find((user) => {
  //   if(user.id === id){
  //     return user.salt
  //   };
  // });
   
  if(user.enable === 'disable') return false;
  if (!user) {
    res.status(404).json({})
    return
  }
  const salt = user.salt
  // TODO 2. 로그인시 암호화를 통해서 로그인 확인하기
  // 내가 저장해두었던 salt값을 이용해서 req.body에 있던 사용자가 입력한 pw에 salt작업을 했을 때와 전에 저장해 두었던 값이 서로 같으면 불러올 수 있게 하는 것임.
  const hashedPw = hash.getHash(pw, salt);

  if(user.pw !== hashedPw){
    res.status(401).json({message: '입력하신 비밀번호가 올바르지 않습니다.'});
    return
  }

  // 1. token을 만들어 매 요청시 마다 해당 토큰을 header에 담아서 사용
  // 2. token을 만들어서 쿠키에 저장을 해서 http 헤더에 다이렉트로 저장하는 방법
  // 3. session을 생성하는 방법 (옛날 방법)
  const token = hash.getSalt();
  const expired = hash.getExpiredTime();
  connectStatus[id] = {
    token, expired
  }
  // console.log('token : ', token);
  // console.log('expired : ', expired);

  res.json({
    token, expired
  })
})

// 로그인이 되었는지 확인하는 미들웨어 생성
router.use('/:id', (req, res, next) => {
  const { id } = req.params
  if(!id){
    res.status(404).json({});
    return
  }

  const connection = connectStatus[id];
  if(!connection){
    res.status(404).json({message : '해당 계정의 로그인 기록이 없습니다. '});
    return
  }

  const token = req.headers['_token_'];
  if(!token){
    res.status(401).json({message: 'token 정보를 입력해주세요.'});
    return
  }

  if(token !== connection.token){
    res.status(401).json({message: 'token 정보가 올바르지 않습니다.'});
    return
  }

  if(Date.now() > connection.expired){
    res.status(401).json({message: '해당 계정의 로그인 접속시간이 만료되었습니다.'});
    return
  }

  // token 만료시간 갱신
  connection.expired = hash.getExpiredTime()

  next();
})

// 유저 상세 조회 API
router.get('/:id', (req, res) => {
  const {id} = req.params
  const user = USER_DATA.find(user => user.id === id)
  if(user.enable === 'disable') return false;
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
router.patch('/:id', (req, res) => {
  const { id, pw, name, enable } = req.params;
  const idNum = USER_DATA.indexOf(id);
  if(!idNum){
    return res.status(400).json({err});
  }
  USER_DATA[idNum] = {
    id: id,
    pw: pw,
    name: name,
    enable: enable
  }
  res.send(`요청하신대로 정보가 수정되었습니다. ${id}님`);
})

// 유저 삭제 API
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const idNum = USER_DATA.indexOf(id);
  if(!idNum){
    return res.status(400).json({err});
  }
  USER_DATA.splice(idNum, 1);
  res.send('id가 제거 되었습니다.')
})

module.exports = router

// 비밀번호
// server salt
// client salt

// 클라이언트에서 1차로 client salt 암호화 -> hash값을 서버로 전송
// server salt로 한번더 암호화 -> hash(실제 데이터에 저장되는 값)
