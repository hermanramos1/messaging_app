const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

mongoose.connect("mongodb://localhost/message_board", { 
    useNewUrlParser: true, useUnifiedTopology: true });

require('./server/config/mongoose.js');
require('./server/config/routes.js')(app);


app.listen(8000, function() {
    console.log("Listening on port 8000")
});