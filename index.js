var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'});
app.use(morgan('combined', {stream: accessLogStream}));

var dbConfig = require('./config/database.config.js');
var mongoose = require('mongoose');

mongoose.connect(dbConfig.url, {
    useMongoClient: true
});
 
mongoose.connection.on('error', function(){
    console.log('Could not connecting to database... exiting now... ');
    process.exit();
});

mongoose.connection.once('open', function(){
    console.log("Successfully connected to database");
});

/* app.get('/',function(req, res){
    res.json({"message": " welcome to crud api application for client panel"});
}); */
console.log("before routes...");
require('./app/routes/client.routes.js')(app);
console.log("after routes...");
app.listen(3000, function(){
    console.log("Server is listening on port : 3000");
});