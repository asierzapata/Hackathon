var mongoose = require('mongoose');

var ApiLinkSchema = new mongoose.Schema({  
    name: String,
    link: String
});

mongoose.model('ApiLink', ApiLinkSchema);

module.exports = mongoose.model('ApiLink');