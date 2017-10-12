var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({  
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  coins: { type: Number, default: 50 },
  avatar: String,
  name: String,
  surname: String,
  bet_history: [Object],
  favourite_team: String
});

mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');