var mongoose = require('mongoose');

var TeamSchema = new mongoose.Schema({  
    name: { type: String, required: true },
    acronym: { type: String, required: true, unique: true },
    avatar: String,
    players: { type: [String], min: 5, max: 10},
    coach: String,
    last_5_games: { type: [String], max: 5 }, //Win o Lose, o racha de victories
    region: String //EUW, NA, LCK, NPL, etc etc
});

mongoose.model('Team', TeamSchema);

module.exports = mongoose.model('Team');