var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

//model
var User = require('../models/pets.js');

router.get('/',function(req, res){
  console.log('in router.get');

  User.find({}, function(err, userResults){
    if(err){
        console.log('error occurred', err);
        res.sendStatus(500);
      } else {
        console.log('hit else');
        res.send(userResults);
      }
    });
});
