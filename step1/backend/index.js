const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User=require('./models/User')
const port = 3001;
const cors=require("cors")
const register=require('./authentication/Regiser')
const login=require("./authentication/Login")
const alumini=require("./alumini/Alumini")
const profile=require("./profile/Profile")
const todoList=require("./profile/TodoList")
var bodyParser = require('body-parser');
const score=require("./scoring/scoring")
app.use(cors())
app.use(bodyParser.json()); 
app.use('/register',register)
app.use('/login',login)
app.use("/profile",profile)
app.use("/alumini",alumini)
app.use("/todoList",todoList)
app.use("/score",score)
const database_connect=require("./database_connect")
database_connect.connection()
let MsgToAdmin=require('./profile/MsgToAdmin')
app.get('/MsgToAdmin',MsgToAdmin)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
 
  console.log(`Example app listening  port ${port}!`);
});
