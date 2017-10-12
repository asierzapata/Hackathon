var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({  
    name: String,
    abbreviation: String,
    avatar: String,
    players: { type: [String], min: 5, max: 10},
    coach: String,
    last_5_games: { type: [String], max: 5 }, //Win o Lose, o racha de victories
    region: String, //EUW, NA, LCK, NPL, etc etc
});

mongoose.model('Team', TeamSchema);

module.exports = mongoose.model('Team');