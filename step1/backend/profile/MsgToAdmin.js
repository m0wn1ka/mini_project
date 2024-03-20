const express=require("express")
let current_date=require("../current_date")
const auth_middle_ware=require("../middle_wares/auth_middle_ware")
const router=express.Router()
router.get("/",(req,res)=>{
let ans=current_date.current_date()
return res.send("date is ",ans)
})
module.exports=router