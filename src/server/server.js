var app = require('./app');
/*
var options = {
    key: fs.readFileSync('privkey.pem'),
    cert: fs.readFileSync('fullchain.pem')
}; 
var https = require('https').createServer(options,app);*/

var http = require('http').Server(app);

/*
https.listen(443, function(){
    console.log('listening on *:443');
});*/

http.listen(8000, function(){ // Prod change to 80
    console.log('listening on *:8000');
});
