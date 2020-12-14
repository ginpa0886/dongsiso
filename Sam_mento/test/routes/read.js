const { json } = require('body-parser');
const express = require('express');
const { fstat, readFile } = require('fs');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  console.log('실행중인지 테스트');
  console.log(req.params , req.query);
  res.sendFile(path.join(__dirname, './test.json'));
})

module.exports = router;