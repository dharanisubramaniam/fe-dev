const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    id:{
        type: Number,
    },
    name:{
        type: String,
    },
    description: {
        type: String,
    }
})

module.exports = Category = mongoose.model('category',CategorySchema);