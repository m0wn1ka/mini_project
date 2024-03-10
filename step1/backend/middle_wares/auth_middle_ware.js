const jwt=require("jsonwebtoken")
const SECRET=require("../SECRET").SECRET;
module.exports=function(req,res,next){
    if(req.body.cookie){
        const decoded=jwt.verify(req.body.cookie,SECRET);
        req.user_mail=decoded.cookie_user.email;
        console.log("auth middle ware called with and res is ",decoded.cookie_user.email)
        next();
    }
    else{
        return res.status(210).send("cookie needed")
    }
}