let {MongoClient}=require("mongodb")
const mongoURI="mongodb+srv://radham0wn1ka:radhaminiprojectpass@miniprojectccluster.vajbbvn.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(mongoURI);
module.exports.connection=async()=>{
    console.log("hi there how are u");
    try {
        conn = await client.connect();
      } catch(e) {
        console.error(e);
      }
      console.log("doneeee.... with connection")
}