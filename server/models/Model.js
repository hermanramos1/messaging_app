const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema(
    {
    name: { type: String, required: true, minLength:1},
    content: {type: String, required: true, minlength:1}, 
    },{ timestamps: true}
)

const MessageSchema = new mongoose.Schema(
    {
    name: { type: String, required: true, minLength:1},
    content: {type: String, required: true, minlength:1}, 
    comments: [CommentSchema]
    },{ timestamps: true}
)


mongoose.model("Comment", CommentSchema);
mongoose.model("Message", MessageSchema);


