var express = require('express');
var app = express();
var db = require('./db');

// Controllers
var controllers = require('./entities/root');

for (var route in controllers){
    if(controllers.hasOwnProperty(route)){
        app.use(route,controllers[route])
    }
}

module.exports = app;