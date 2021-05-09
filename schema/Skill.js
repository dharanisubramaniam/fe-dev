const mongoose = require('mongoose');

const SKillSchema = new mongoose.Schema({
    category_id:{
        type: Number,
    },
    course_id:{
        type: Number,
    },
    skills: [{
        type:String,
    }]
})

module.exports = Skill = mongoose.model('skill',SKillSchema);