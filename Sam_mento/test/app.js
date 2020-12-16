
const express = require('express');
const path = require('path');

const app = express();
const indexRouter = require('./routes/index');
const userRouter = require('./routes/user');

const { getuid } = require('process');
const { readFile } = require('fs');
app.set('port', process.env.PORT || 3000);

app.use((req, res, next) => {
  next();
});
app.get('/', (req, res, next) => {

  // 서버에는 항상 req와 res 값이 있어야 한다.
  // 아무 의미 없는 값이라도 보내주어야 서버가 정상적이게 작동한다.
  res.send('무엇이 문제냐');
});

// (req, res) => {
//   throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
// });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use('/index', indexRouter);
app.use('/user', userRouter);
// app.use('/user/:id', getUser);

app.use('/dong', express.static(path.join(__dirname, 'public')));

app.get('/dong',(req, res) => {
  res.sendFile(path.join(__dirname, 'public/calculator.html'));
});



app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.get('/user/:id', (req, res) =>{
  readFile(path.join(__dirname, 'routes/test.json'), function(err, data){
    console.log(data.toString());
  });
  console.log(req.body);
  res.send(req.body);
});
 


app.get('/user/:id', (req, res) =>{
  readFile(path.join(__dirname, 'routes/test.json'), function(err, data) {
    const hold = JSON.parse(data);
    const { id } = hold;
    const result = [];

    for(let i = 0; i < id.length; i++){
      if(id[i].id == req.params.id){
        result.push(id[i]);
        break;
      }
    }
    if(result.length === 0){
      result.push('값이 없습니다.');
    }
    res.send(result[0]);
  });
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});