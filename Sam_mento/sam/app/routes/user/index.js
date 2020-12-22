const express = require('express');
const {Router} = require('express')
const path = require('path');
const multer = require('multer');
const fs = require('fs');


const userModel = require('./user');
const { urlencoded } = require('body-parser');
const { nextTick } = require('process');
const app = express();


const router = Router()

let USER_DATA = [
  new userModel('red', '1111', '누구개1', 'enable', new Date(), new Date()),
  new userModel('blue', '1111', '누구개2', 'enable', new Date(), new Date()),
  new userModel('yellow', '1111', '아무개3', 'enable', new Date(), new Date()),
  new userModel('pink', '1111', '아무개4', 'enable', new Date(), new Date()),
  new userModel('black', '1111', '누구개5', 'disable', new Date(), new Date()),
  new userModel('gold', '1111', '아무개6', 'enable', new Date(), new Date())
]


// 유저 생성 API
router.route('/')
  .get((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
  })
  .post((req, res, next) => {
    // console.log('post 실행됨');
    // console.log(22222, req.params); // 값 없음
    // console.log(33333, req.query); // 값 없음
    const { id, pw, name, enable } = req.body;
    

    if(id === undefined){
      res.status(400).json({err: 'id를 입력하지 않았습니다.'});
    }
    if(pw === undefined){
      res.status(400).json({err: 'pw를 입력하지 않았습니다.'});
    }
    if(name === undefined){
      res.status(400).json({err: 'name를 입력하지 않았습니다.'});
    }
    if(enable === undefined){
      res.status(400).json({err: 'enable를 입력하지 않았습니다.'});
    }

    // 검사 후에 데이터베이스에 값을 입력함
    USER_DATA.push({ id, pw, name, enable });

    // console.log(id,pw,name,enable);
    // console.log(44444, req.body);

    // 데이터 저장 시키는 함수 실행
    

    res.send(`등록되었습니다. ${req.body.id}님`);
    
  })

// 유저 목록을 조회 APIs
router.get('/', (req, res) => {
  console.log('실행되나요?');
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
  const items = users.slice(offset, offset + pageSize).map(({pw, enable, ...user}) => user)

  res.json({
    items,
    page,
    pageSize,
    total: users.length
  })
})

// 유저 상세 조회 API
router.get('/:id', (req, res) => {
  const {id} = req.params
  const user = USER_DATA.find(user => user.id === id)
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