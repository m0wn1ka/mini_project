const Alumini=require("../models/Alumini")
const express=require("express")
const {ObjectId}=require("mongodb")
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("this is alumini get path")
})
router.post("/",async(req,res)=>{
    if(req.body){
        const objectId = new ObjectId();
        const alumini1=new  Alumini({_id:objectId,data_of_alumini:req.body});
        await alumini1.save()
        console.log(req.body)
        return res.status(200).send("got the req from frontend on alumini post req,(i am from alumin backend)")
    }
    else{
        return res.status(205).send("need to send something")
    }

})
module.exports=router