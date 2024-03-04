const Alumini=require("../models/Alumini")
const express=require("express")
const {ObjectId}=require("mongodb")
const router=express.Router()
router.get("/",(req,res)=>{
    res.send("this is alumini get path")
})
router.post("/",async(req,res)=>{
    if(req.body){
        // console.log("req body of alumini fillling ",req.body)
        const objectId = new ObjectId();
        const alumini1=new  Alumini({_id:objectId,id_no:req.body.id_no,data_of_alumini:req.body.alumini_data});
        await alumini1.save()
        console.log(req.body)
        return res.status(200).send("got the req from frontend on alumini post req,(i am from alumin backend)")
    }
    else{
        return res.status(205).send("need to send something")
    }

})
router.get("/verify",async(req,res)=>{
    let alumini1=await Alumini.findOne({verified:false})
    console.log("i am from alumini/verify")
    console.log(alumini1,typeof(alumini1))
    if(alumini1!=null){
    return res.status(202).send(alumini1)
    }
    else{
        return res.status(203).send("all are verifed")
    }
})
router.post("/verify",async(req,res)=>{
    console.log("verify alumin called with ",req.body)
    if(req.body.id){
        let response=await Alumini.findByIdAndUpdate(req.body.id,{verified:req.body.verify})
        return res.status(200).send("alumini has been updated as per ur directs")
    }
    else{
        return res.status(201).send("cant do anython")
    }
})
router.post('/getAlumini',async(req,res)=>{
    if(true){
        console.log("req.body/count is ",req.body.count)
        let alumini_data=await Alumini.find({verified:true}).skip(req.body.count).limit(5)
        console.log("alumini data is ",(alumini_data).length)
        res.count=alumini_data.length
        return res.status(200).send({"alumini_data":alumini_data,count:alumini_data.length})
    }
    else{
        res.status(201).send("try later")
    }
})
module.exports=router