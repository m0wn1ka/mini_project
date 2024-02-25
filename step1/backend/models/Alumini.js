const mongoose = require('mongoose');
const { Schema } = mongoose;
const AluminiSchema = new mongoose.Schema({
    _id: Schema.Types.ObjectId,
    data_of_alumini: {
        type: Object,
        required: true
    }
    
});

module.exports = Alumini = mongoose.model('alumini', AluminiSchema);