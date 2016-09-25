var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var urlencodedParser = bodyParser.urlencoded( { extended: true } );
var port = process.env.PORT || 3222;
app.use(bodyParser.json());
var mongoose = require('mongoose');

//routers
var userRouter = require('../routers/petRouter');

//use routers
app.use('/pets', petRouter);

mongoose.connect("mongodb://localhost:27017/petTable");

app.listen(port, function)
