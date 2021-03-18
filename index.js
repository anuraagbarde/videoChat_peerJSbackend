var express = require('express');
var app = express();
var PORT = process.env.PORT || 9000
var ExpressPeerServer = require('peer').ExpressPeerServer;
var path = require('path')
var http = require('http');
var https = require('https');
var fs = require('fs');

// var sslOptions = {
//   key: fs.readFileSync('../.localCert/keyClientLocal_192_168_15_169.pem'),
//   cert: fs.readFileSync('../.localCert/certClientLocal_192_168_15_169.pem'),
// };

var server = http.createServer(app).listen(PORT);
// https.createServer(sslOptions, app).listen(443);
// var server = new WebSocketServer("wss://[IPAddress]:[Port]");

// CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/peerserver', ExpressPeerServer(server, {debug:true}));
console.log('ok')
// app.use('/', express.static(path.join(__dirname, '/client')))