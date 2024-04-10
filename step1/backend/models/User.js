const { Int32 } = require('mongodb');
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
    image_url:{
        type:String,
        default:'https://radham0wn1ka.github.io/assets/img/avatar.jpg'
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
    ,score:{
       type: Number,
       default:0
    }

    
});

module.exports = User = mongoose.model('user', UserSchema);