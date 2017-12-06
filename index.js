var express = require('express');
var path = require('path');
var app = express();

var config = require('./config.json');

// Define the port to run on
app.set('port', config.server.port);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
   var port = server.address().port;
   console.log('Server listening on port: ' + port);
});

