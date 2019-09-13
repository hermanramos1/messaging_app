const MessagesCtrl = require("./../controllers/MessagesCtrl.js")
const CommentsCtrl = require("./../controllers/CommentsCtrl.js")

module.exports = function(app){
    app.get("/", MessagesCtrl.index)
    app.post('/messages', MessagesCtrl.create);
    app.post('/messages/:messageId/comments', CommentsCtrl.create);


}