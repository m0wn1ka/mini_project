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
    }
    
});

module.exports = User = mongoose.model('user', UserSchema);