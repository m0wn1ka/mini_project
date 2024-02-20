const User=require('../models/User')
const express=require("express")
const {ObjectId}=require("mongodb")
const router=express.Router()
router.post('/',async(req,res)=>{
    if(req.body.email && req.body.password&&req.body.name){
        try{
    const objectId = new ObjectId();
    console.log("a new req to register of backed",req.body)
    const user1=new  User({_id:objectId,email:req.body.email,name:req.body.name,password:req.body.password})
    await user1.save()
    res.send("hi");
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
    res.send("register get route,to register use post route")
})
module.exports=router