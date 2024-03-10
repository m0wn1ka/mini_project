const User=require('../models/User')
const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const SECRET="SECRET1212"
const auth_middle_ware=require("../middle_wares/auth_middle_ware")
router.post("/",auth_middle_ware,async(req,res)=>{
    let user_mail=req.user_mail
    const user1=await  User.findOne({email:user_mail},{password:0})
    console.log("user 1 data is ",user1)
   return  res.json({user1})
})
module.exports=router

