var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  petName:  String,
  animal: String,
  age:   Number,
  picture: String
});
var User = mongoose.model('petTable', userSchema);
module.exports = User;
