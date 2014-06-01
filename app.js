var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);
app.use(express.static(__dirname));
app.get('/',function(req,res){
  res.senfile(__dirname + '/index.html');
});
//socket.io
var listUser={};
var User={};
//server listen connect
io.sockets.on('connection',function(socket){
  //send new user to another users
  socket.on('nick name',function(name){
    socket.name=name;
    socket.broadcast.emit('rookie',{'name':name,'id':socket.id});
  });
  //chat all
  socket.on('all',function(data){
      var message=socket.name+':'+data;
      io.sockets.emit('all',message);
    });
  //store socket client 
  socket.on('get list chat',function(){
    socket.get('nickname',function(err,name){
      Server.users['name'] = socket;
    });
  });
  //disconnect
  //chat
  socket.on('chatting',function(data){
    console.log(data);
    io.sockets.connected[data.id].emit('receive',data.data);
  });

})