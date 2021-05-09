const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    category_id:{
        type: Number,
    },
    course_id:{
        type: Number,
    },
    category:{
        type: String,
    },
    difficultylevel:{
        type: String,
    },
    thumbnail: {
        type: String,
    },
    title: {
        type: String,
    },
    rating: {
        type: Number,
    },
    timing: {
        type: String,
    },
    amount: {
        type: Number,
    },
    noofstudents: {
        type: Number,
    },
    noofstudents_rated: {
        type: Number,
    },
    thumbnail_desc: {
        type: String,
    },
    description: {
        type: String,
    },
    lessons: {
        type: Number,
    },

})

module.exports = Course = mongoose.model('course',CourseSchema);