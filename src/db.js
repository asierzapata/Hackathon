// db.js
var mongoose = require('mongoose');

var user='root_bet';
var password='pogchampbet';

mongoose.connect('mongodb://'+user+':'+password+'@217.182.71.60:27017/bets',{useMongoClient: true}, function(err){
    if (!err) console.log('Connected succesfully to db')
    else console.log(err)
});