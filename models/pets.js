var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  petName:  String,
  animal: String,
  age:   Number,
  picture: String
});
//sent info to database collection pets
var User = mongoose.model('pets', userSchema);
module.exports = User;
