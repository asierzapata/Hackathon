var mongoose = require('mongoose');

var MatchSchema = new mongoose.Schema({  
  teams: [String],
  time: { type: Date, default: Date.now },
  game: String,
  competition: String
});

mongoose.model('Match', MatchSchema);

module.exports = mongoose.model('Match');