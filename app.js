var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const cors = require('cors')
var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'localhost',
    post : 3306,
    user : 'root',
    password : 'd15324151532!',
    database : 'jsman'
})

connection.connect()

app.listen(3000, function(){
    console.log("start! express server on port 3000");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(cors())

//url routing ok...
app.get('/', function(req,res){
    //res.send("")
    res.sendFile(__dirname + "/public/main.html")
})

app.get('/main', function(req,res){
    res.sendFile(__dirname + "/public/main.html")
})

app.post('/email_post', function(req,res){
    //get : req.param('email') => get으로 받는 방식
    console.log(req.body.email)
    //res.send("post response")
    //res.send("<h1> welcome "+ req.body.email + "</h1>")
    res.render('email.ejs', {'email' : req.body.email})

})

app.post('/ajax_send_email', function(req, res) {
    console.log(req.body.email);
    //check validation about input value => select db
    //var responseData = {'result': 'ok', 'email' : req.body.email}
    var email = req.body.email;
    var responseData={};

    var query = connection.query('select name from user where email="' + email +'"', function(err, rows){
        if(err) throw err;
        if(rows[0]){
            responseData.result = "ok";
            responseData.name= rows[0].name;
        }else{
            responseData.result = "none";
            responseData.name= "";
        }
        res.json(responseData)
    })
});

