const fs = require('fs');
const data = fs.readFileSync('./db.json');
const express = require('express')
const app = express()
const json=require("jsonwebtoken")
const jwt=require("jsonwebtoken")
const port = 4003
const cors=require("cors")
var bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json()); 
let  jsonData = JSON.parse(data);
const SECRET='sec123'
aray_data=jsonData["users"]
app.get('/', (req, res) => {
  res.send('Hello World!')

})
app.get("/test",async(req,res)=>{
  // console.log("file data is ",typeof(data),"json data is ",jsonData)
  for (let i=0;i<aray_data.length;i++){
    console.log(aray_data[i])
  }
  
 
  res.send("testt ")
})
app.post("/register",async(req,res)=>{
  
  let a=[req.body.email,req.body.name,req.body.password]
 
  for (let i=0;i<aray_data.length;i++){
    if(aray_data[i]["email"]==req.body.email){
      return res.status(205).send("user already exists please lgoin")
    }
  }

  aray_data.push({"name":req.body.name,"email":req.body.email,"password":req.body.password})
 jsonData["users"]=aray_data
  fs.writeFileSync('db.json', JSON.stringify(jsonData));

  console.log(" reg data is ",a)
  return res.send("post to reg is done")
})
app.post("/login",async(req,res)=>{
  let a=[req.body.email,req.body.password]
  console.log("post login a is ",a)

  for (let i=0;i<aray_data.length;i++){
    if(aray_data[i]["email"]==req.body.email && aray_data[i]["password"]==req.body.password){
      let cookie_user={email:req.body.email}
      tok=jwt.sign({cookie_user},SECRET,{ expiresIn: '1h' })
      return res.status(200).send({msg:"user loggend in successuflly",tok:tok})
    }
  }
 return res.status(299).send("incorect login")

})
app.post("/profile", async (req, res) => {
  console.log("araryy data is ",aray_data)
  console.log("in profile token is ", req.body);
  if (req.body.token) {
    let token = req.body.token;
    let parts=token.split(".")
    token=parts[1]
    let bufferObj = Buffer.from(token, "base64"); 
    let user= bufferObj.toString("utf8");
    user=JSON.parse(user)
    user=user["cookie_user"]["email"]
    

    for (let i=0;i<=aray_data.length;i++){
      if(aray_data[i]["email"]==user ){
       
        let response={email:aray_data[i]["email"],name:aray_data[i]["name"],password:aray_data[i]["password"]}
      
        return res.status(200).json(response)
      }
    }


    
  } else {
    return res.status(299).send("You need to login");
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
