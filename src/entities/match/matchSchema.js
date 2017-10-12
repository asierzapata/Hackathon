var mongoose = require('mongoose');

var MatchSchema = new mongoose.Schema({  
  teams: { type: [Object], max: 2 },
  start_time: { type: Date, default: Date.now },
  ended: { type: Boolean, default: false },
  bet_net: [Object], 
  winner: String,
  game: String,
  competition: String
});

mongoose.model('Match', MatchSchema);

module.exports = mongoose.model('Match');