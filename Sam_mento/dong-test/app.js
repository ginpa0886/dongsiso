const express = require('express');
const path = require('path');

const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use((req, res, next) => {
  next();
});
app.get('/:id', (req, res) => {
  console.log(req.originalUrl); // /:id
  console.log(req.params.id); // :id
  console.log(req.method); // GET
  // res.sendFile(path.join(__dirname,'public', '/want.json'), function(data){
  // });

  
  
  // res.send('아니면 이건가?');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});