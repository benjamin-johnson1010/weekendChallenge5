var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var port = process.env.PORT || 3222;
app.use(bodyParser.json());
var mongoose = require('mongoose');

//routers
var petRouter = require('../routers/petRouter');

//use routers
app.use('/pets', petRouter);

mongoose.connect("mongodb://localhost:27017/petTable");


app.listen(port, function(){
  console.log('listening on', port);
});
app.get("/*", function(req,res){
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "/public/", file));
});

app.use(express.static('public'));
