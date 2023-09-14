const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const multer = require('multer');
const homeRouter = require('./routers/homeRouter');

const port = process.env.port || 3000;

const app = express();
const db = require('./mongodb/mongodbconnection')




app.set('view engine','ejs');

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.use('/',homeRouter)




app.listen(port,(req,res) =>{
    console.log("app run at  server ",port)
})
