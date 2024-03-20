const mongoose = require('mongoose');
const { Schema } = mongoose;
const MsgToAdminSchema= new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    date:String,
    msgs_to_admin:[]
})
module.exports = MsgToAdmin = mongoose.model('msgToAdmin', MsgToAdminSchema);