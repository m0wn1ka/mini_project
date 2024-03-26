const Alumini=require("../models/Alumini")
const auth_middle_ware=require("../middle_wares/auth_middle_ware")
const express=require("express")
const {ObjectId}=require("mongodb")
const router=express.Router()
const jwt=require("jsonwebtoken")
const SECRET=require("../SECRET").SECRET
router.get("/",(req,res)=>{
    res.send("this is alumini get path")
})
router.post("/",async(req,res)=>{
    if(req.body){
        // console.log("req body of alumini fillling ",req.body)
        //find whehter the same data is already there
        let alumini_exists=await Alumini.findOne({id_no:req.body.id_no});
        console.log("alumii existss res is ",alumini_exists)
        if(alumini_exists!=null){
            return res.status(299).send("already data has been filled for this id ")
        }
        const objectId = new ObjectId();
        const alumini1=new  Alumini({_id:objectId,id_no:req.body.id_no,name:req.body.name,image_url:req.body.image_url,data_of_alumini:req.body.alumini_data});
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
router.post("/verify",auth_middle_ware ,async(req,res)=>{
  if(req.user_mail!='admin'){
    return res.status(209).send("u are a intruder")
  }
    
    if(req.body.id){
        let response=await Alumini.findByIdAndUpdate(req.body.id,{verified:req.body.verify})
        return res.status(200).send("alumini has been updated as per ur directs")
    }
    else{
        return res.status(201).send("cant do anython")
    }
})
// router.post('/getAlumini',async(req,res)=>{
//     if(true){
//         console.log(req.body)
//         console.log("req.body/count is ",req.body.count)
//         console.log("Req.body.filter",req.body.filters)
//         req.body.filters["verified"]="true"
//         console.log("filters are from alumijjni ",req.body.filters)
//         let alumini_data=await Alumini.find(req.body.filters).skip(req.body.count).limit(4)
//         console.log("alumini data is ",(alumini_data).length)
//         res.count=alumini_data.length
//         return res.status(200).send({"alumini_data":alumini_data,count:alumini_data.length})
//     }
//     else{
//         res.status(201).send("try later")
//     }
// })



router.post('/getAlumini',async(req,res)=>{
    if(true){
        console.log(req.body)
        
        console.log("filters are from alumijjni ",req.body.filters)
        let alumini_data=await Alumini.find()
        
        return res.status(200).send({"alumini_data":alumini_data})
    }
 
})



router.post('/get2Alumini',async(req,res)=>{
  try{
        let alumini_data=await Alumini.find({verified:true}).limit(2)
        return res.status(200).send({"alumini_data":alumini_data})
  }
  catch(err){
    return res.status(299).send("err in fetching data")
  } 
   
})
module.exports=router