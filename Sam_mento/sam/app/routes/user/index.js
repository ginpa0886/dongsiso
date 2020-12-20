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

// // uploads라는 폴더를 일단 만든다.
// try{
//   fs.readFileSync('uploads')
// }catch(error){
//   console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
//   fs.mkdirSync('uploads');
// }

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, 'uploads/');
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     }
//   })
// });

// router.use(express.json());
// router.use(express.urlencoded({ extended: false }));

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
});
router.post('/', (req, res, next) => {
  
  console.log(22222, req.params);
  console.log(33333, req.query);
  console.log(44444, req.body);
  
  next('route');
  console.log('????');
});

// 유저 목록을 조회 API
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

// 유저 생성 API
router.post('/', (req, res) => {

})

// 유저 수정 API
router.patch('/:id', (req, res) => {

})

// 유저 삭제 API
router.delete('/:id', (req, res) => {

})

module.exports = router