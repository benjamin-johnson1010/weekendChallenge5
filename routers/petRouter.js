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
        console.log('hit else', userResults);

        res.send(userResults);
      }
    });
});
router.post('/',function(req, res){
  var sentData = req.body;
  console.log('sentData', sentData);
  var newUser = new User({
    petName: sentData.petName,
    animal: sentData.animal,
    age: sentData.age,
    picture: sentData.picture
  });
  newUser.save(function(err){
    if(err){
    console.log('error occurred:', err);
    res.sendStatus(500);
  }
  else{
    console.log('success', newUser);
    res.send(newUser);
  }
  });

  });
module.exports = router;
