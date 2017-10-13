var mongoose = require('mongoose');

var MatchSchema = new mongoose.Schema({  
  teams: [],
  start_time: { type: Date, default: Date.now },
  ended: { type: Boolean, default: false },
  bet_net: [],
  winner: String,
  game: String,
  competition: String,
  id_match_history: String
});

mongoose.model('Match', MatchSchema);

module.exports = mongoose.model('Match');