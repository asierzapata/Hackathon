var mongoose = require('mongoose');

var TournamentSchema = new mongoose.Schema({  
    name: String,
    slug: String,
    logo: String,
    start_time: Date,
    end_time: Date,
    series: [String],
    game_slug: {type: String, unique: true }
});

mongoose.model('Tournament', TournamentSchema);

module.exports = mongoose.model('Tournament');