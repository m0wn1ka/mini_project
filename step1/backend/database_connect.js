const mongoose=require('mongoose');
const mongoURI="mongodb+srv://radhamounika:radhaminiprojectpass@miniproject.lxrk0qa.mongodb.net/?retryWrites=true&w=majority";
module.exports.connection=async()=>{
  console.log("hi")
  const connectionParms={
      // useUnifiedToplogy:true,
      useNewUrlParser:true,
  }
  try{
     await mongoose.connect(mongoURI,connectionParms);
console.log("data base connected using new age coder video in appjs file.....");
  }
  catch(err){
      console.log(err.message);
      process.exit(0)
  }
}
