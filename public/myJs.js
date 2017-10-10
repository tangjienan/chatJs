$(function () {
  var socket = io();
  $('form').submit(function(){
              //send message to server
              socket.emit('chat message', $('#m').val());
              $('#m').val('');
              return false;
              });
              //receive message and append it to html
              socket.on('chat message', function(msg){
                 var pass = $('#messages');
                 append(msg, pass);
                 //$('#messages').append( $('<li>').append(msg)       );
              });
});

//deal with differnt msg tyoe
function append(msg, thisObject){
      var lines = msg.split('\n');
      var appendValue = $("<p></p>"); 
      var appendMsg = "";
      $.each(lines, function(){
            appendMsg += this + "<br>"
      });
      appendValue.html(appendMsg);
      thisObject.append(appendValue);
}