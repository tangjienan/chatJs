var express = require('express');
app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

//express loading static file from public directory
app.use(express.static('public'));

io.on('connection', function(socket){
  console.log('a user connected');
});

http.listen(3001, function(){
  console.log('listening on *:3000');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
  });
});
    

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});