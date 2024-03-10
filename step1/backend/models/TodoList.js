const mongoose = require('mongoose');
const { Schema } = mongoose;

const TodoSchema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    date: {
        type: String,
       
    }
});

const TodoListSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    todo: [TodoSchema]
});

module.exports = mongoose.model('TodoList', TodoListSchema);
