const { static } = require('express');
const express = require('express');

const port = 3000;


const app = express.Router();
app.set('port', process.env.PORT || port);
app.use(express.static(path.join(__dirname, 'public')));



app.listen()