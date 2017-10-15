var mongoose = require('mongoose');

var MatchSchema = new mongoose.Schema({
  name: String,  
  teams: [],
  start_time: { type: Date, default: Date.now },
  ended: { type: Boolean, default: false },
  bet_net: [],
  winner: String,
  game: String,
  competition: String,
  match_history: Object,
  series_slug: String
});

mongoose.model('Match', MatchSchema);

module.exports = mongoose.model('Match');