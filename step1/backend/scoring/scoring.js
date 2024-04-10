const express=require("express")
const User=require('../models/User')
const jwt=require("jsonwebtoken")
const router=express.Router()
const SECRET="SECRET1212"
const auth_middle_ware=require("../middle_wares/auth_middle_ware")
let answers={
    "developer_task1":"secret_key_of_b64_decode_congrats"
}
router.post("/",auth_middle_ware,async (req,res)=>{
    console.log("req.usermail",req.user_mail)
    console.log("req.body" ,req.body)
    if(req.body.solution==answers[req.body.task_name]){
        const user1=await  User.findOne({email:req.user_mail},{password:0})
        // console.dsdlog("sovled stauts i ",user1.solved_status)
        console.log("usr1 solved _Status list ",user1.solved_status,"req.body task is ",req.body.task_name)
        if(user1.solved_status.includes(req.body.task_name)){
            console.log("u lready soved sent")
            return res.json({"msg":"success congrats but u already solved it"})
        }
        else{
            let sovled_list=user1.solved_status
         
            sovled_list.push(req.body.task_name)
            console.log("just before db saving ",sovled_list);
            let length=sovled_list.length;
            let score=10*length
            let resp=await User.findOneAndUpdate({email:req.user_mail},{solved_status:sovled_list,score:score})
            console.log("congrats sent")
            return res.json({"msg":"success points added"})
        }
      
    }
    console.log("wrong values  yaar sent")
    return res.json({"msg":"wrong value try again"})
})

module.exports=router