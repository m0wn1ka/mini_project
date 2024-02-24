const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User=require('./models/User')
const port = 3001;
const cors=require("cors")
const register=require('./authentication/Regiser')
const login=require("./authentication/Login")
const profile=require("./profile/Profile")
var bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json()); 
app.use('/register',register)
app.use('/login',login)
app.use("/profile",profile)
const database_connect=require("./database_connect")
database_connect.connection()

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
 
  console.log(`Example app listening  port ${port}!`);
});
