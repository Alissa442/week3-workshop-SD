var express = require('express');
var app = express();
var http = require('http').Server(app);

// Serve static files from the "www" directory
app.use(express.static(__dirname + '/www'));

// Start the server
let server = http.listen(3000, function () {
    let host = server.address().address;
    let port = server.address().port;
    console.log("Server listening on: " + host + " port: " + port);
});
