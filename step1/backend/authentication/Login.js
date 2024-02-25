const User=require('../models/User')
const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const SECRET="SECRET1212"
router.post('/',async(req,res)=>{
    if(req.body.email && req.body.password){
        try{
    if(req.body.email=="admin" && req.body.password=="admin"){
        let tok=""
        let cookie_user={email:req.body.email}
        tok=jwt.sign({cookie_user},SECRET,{ expiresIn: '1h' })
        return res.status(201).send({"msg":"u are a admin","token":tok})
    }
    
    console.log("a new req to login of backed",req.body)
    let already_exist= await User.findOne({email:req.body.email});
    if(already_exist==null){
        return res.status(205).send("not existed or incorrect details")
    }
    const user1=await  User.findOne({email:req.body.email})
    console.log(user1)
    if(user1.password==req.body.password){
        let tok=""
        let cookie_user={email:req.body.email}
        tok=jwt.sign({cookie_user},SECRET,{ expiresIn: '24h' })
        
        return res.send({"msg":"god logged in","token":tok})
    }
    else{
        return res.status(205).send("not existed or incorrect details")
    }
    
    
        }
        catch(err){
            res.send("try later")
        }
    }
    else{
        console.log(req.body)
        res.send("all fields are required")
    }
})
router.get("/",(req,res)=>{
    res.send("login get route,to login use post route")
})
module.exports=router