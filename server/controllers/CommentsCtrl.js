const mongoose = require('mongoose');
const Message = mongoose.model('Message')
const Comment = mongoose.model('Comment')


module.exports={
    create: function(req, res){
        Comment.create(req.body, function(err, comment){
            if(err){
                console.log(err);
            }else{
                Message.findOneAndUpdate({_id: req.params.messageId}, {$push: {comments: comment}}, function(err, message){
                    if(err){
                        console.log(err)
                    } else {
                        console.log(message)
                        res.redirect('/')
                    }
                })
            }
        })
    }
}