var mongoose = require("mongoose");


const Comment = mongoose.model('Comment', {
    message: String,
    createdAt: Date,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = Comment;
