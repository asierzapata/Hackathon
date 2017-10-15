var mongoose = require('mongoose');

var SeriesSchema = new mongoose.Schema({  
    name: String,
    slug: String,
    place: String,
    start_time: Date,
    end_time: Date,
    matches: [String],
    matches_type : String
});

mongoose.model('Series', SeriesSchema);

module.exports = mongoose.model('Series');