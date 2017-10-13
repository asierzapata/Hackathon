var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({  
    name: String,
    acronym: String,
    logo: String,
    tournaments: [String]
});

mongoose.model('Game', GameSchema);

module.exports = mongoose.model('Game');