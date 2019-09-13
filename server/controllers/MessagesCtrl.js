const mongoose = require('mongoose');
const Message = mongoose.model('Message')

module.exports = {
    index: function (req, res){
        Message.find({}, function(err, msgs){
            if(err){
                console.log(err)
            }else{
                res.render('index', { allMessages: msgs})
            }
        })
    },
    create: function(req, res){
        Message.create(req.body, function(err, msg){
            if(err) {
                console.log(err)
            } else {
                console.log(msg)
                res.redirect("/")
            }
        })
    }
}     