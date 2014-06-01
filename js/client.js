var socket = io.connect();
var idUser=0;
var listChat=[];
// if(localStorage.listchat){
//   listChat = localStorage.listchat;
//   refresh(listChat);
// }


socket.on('rookie',function(data){
  var user ={};
  console.log(data);
  user['id']=data.id;
  user['name']=data.name;
  listChat.push(user);
  // localStorage.listchat = listChat;
  refresh(listChat);
})
//chat on
 socket.on('all',function(data){
    var div = '<div class="message">'+data+'</div>';
    $('#output').append(div);
  });
 //
$('#chat-button').click(function(){
  var message = $('#chat-input').val();
  if(idUser===0){
    socket.emit('all',message);
  }else{
    socket.emit('chatting',{'id':idUser,'data':message});
  }
})

  socket.on('receive',function(data){
    var div = '<div class="message">'+data+'</div>';
    $('#output').append(div);
  });

function refresh(list){
  var ul='<ul class="list-chat">';
  for(i in list){
    var id=list[i]['id'];
    var li='<li id="'+id+'">'+list[i]['name']+'</li>';
    ul+=li;
  }
  ul+='</ul>'
  $('.col-right').html(ul);
}
$(document).ready(function(){
  $('.list-chat li').click(function(){
    idUser = $(this).attr('id');
  });
});