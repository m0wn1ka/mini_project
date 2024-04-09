const mongoose = require('mongoose');
const { Schema } = mongoose;
const UserSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    following:{
        type:[String],
        default:["test1"]//mails thisd user follows,
    }
    ,
    solved_status:
    {
        type:[String],
        default:["test1"]
    }

    
});

module.exports = User = mongoose.model('user', UserSchema);