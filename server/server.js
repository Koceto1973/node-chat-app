const path = require('path');  // built in module without npm install
const http = require('http');  // built in module without npm install, required for sockets.io
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public'); // public path normalized
const port = process.env.PORT || 3000;  // heroku compatible port setting
var app = express();
var server = http.createServer(app); // server app is up
var io = socketIO(server);           // socket to server integration
// socket.io hooks into your Express server 
// and serves the socket.io.js file to the client whenever the request for it comes in.

app.use(express.static(publicPath)); // static asset in by middleware

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('disconnect', () => {
    console.log('User was disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server is up on ${port}`);
});

