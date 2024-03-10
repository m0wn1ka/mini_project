const User=require('../models/User')
const TodoList=require("../models/TodoList")
const express=require("express")
const {ObjectId}=require("mongodb")
const jwt=require("jsonwebtoken")
const router=express.Router()
const SECRET="SECRET1212"
const auth_middle_ware=require("../middle_wares/auth_middle_ware")
router.post("/add",auth_middle_ware,async(req,res)=>{
    let todos=[];
    // console.log("req.body.tasks is",req.body.tasks)
    for (let i in req.body.tasks){
        const objectID=new ObjectId()
        let task1={task:req.body.tasks[i],status:false,date:req.body.the_date,_id:objectID}
        todos=todos.concat([task1])
    }
    // console.log("tods after for loop i s",todos)
    let user_mail=req.user_mail
    const user1=await  User.findOne({email:user_mail},{password:0})
    const user_id=user1._id
    let result=await TodoList.findOne({user_id:user_id})
    
    if(result!=null){
        todos=todos.concat(result.todo)
        let res=await TodoList.findOneAndUpdate({user_id:user_id},{todo:todos})
        // console.log("todos in if bloc",todos)
    }
    else{
        const objectID=new ObjectId()
        let todo1= new TodoList({_id:objectID,user_id:user_id,todo:todos})
        await todo1.save()
        // console.log("todos in else bloc is ",todos)
       
    }
    
    // console.log(user_mail,"existence in todo list  result.todo is ",result.todo)
   return  res.send("todo list page post req")
})


router.post("/view",auth_middle_ware,async(req,res)=>{
    console.log("router post view todoloist")
    let user_mail=req.user_mail
    const user1=await  User.findOne({email:user_mail},{password:0})
    const user_id=user1._id
    let result=await TodoList.findOne({user_id:user_id})
    console.log("result is ",result)
    if(result!=null){
        return  res.status(202).json(result.todo)
    }
    else{
        return res.status(203).send("let us make some notes here")
    }
    
   
})

module.exports=router

