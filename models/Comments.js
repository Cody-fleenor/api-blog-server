const mongoose = require('mongoose');

const CommentSchema = mongoose.Schema({
    description: {
        type: String,
        require: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Comment', CommentSchema)