const User=require('../models/User')
const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const SECRET="SECRET1212"
router.post('/',async(req,res)=>{
    if(req.body.token){
        try{
    
    console.log("a new req to proflile abckend",req.body.token)
    const decoded=jwt.verify(req.body.token,SECRET)
    console.log("decoded is ",decoded)
    return res.send("i am from backend profile")
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
            return res.send("try later")
        }
    }
    else{
        console.log(req.body)
       return res.send("all fields are required")
    }
})
router.get("/",(req,res)=>{
    res.send("login get route,to login use post route")
})
module.exports=router