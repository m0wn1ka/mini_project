const User=require('../models/User')
const express=require("express")
const jwt=require("jsonwebtoken")
const router=express.Router()
const SECRET="SECRET1212"
const auth_middle_ware=require("../middle_wares/auth_middle_ware")
router.post("/user",async(req,res)=>{
    console.log("req.body.user name is ",req.body.user_name)
    let user_name=req.body.user_name
    const user1=await  User.find({name:user_name},{password:0})
    // console.log("user 1 data is ",user1)
    return  res.json({user1})
})


router.post("/",auth_middle_ware,async(req,res)=>{
    let user_mail=req.user_mail
    const user1=await  User.findOne({email:user_mail},{password:0})
    console.log("user 1 data is ",user1)
   return  res.json({user1})
})

router.post("/follow",auth_middle_ware,async (req,res)=>{
let user_mail=req.user_mail
let following_mail=req.body.following_mail
let following_list_prev=await User.findOne({email:user_mail},{following:1})
following_list_prev=following_list_prev.following
console.log("follwoing list is ",following_list_prev,"and type is ",typeof(following_list_prev))
following_list_prev.push(following_mail)
let resp=await User.findOneAndUpdate({email:user_mail},{following:following_list_prev})

console.log("res is ",resp)
return res.send("done with folwong")
// let res=await TodoList.findOneAndUpdate({user_id:user_id},{todo:todos})
})
module.exports=router

