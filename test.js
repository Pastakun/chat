var uri = 'wss://192.168.0.40:10005';
var connection;

window.onload = function () {
  connection = new WebSocket(uri);
  connection.onopen = onOpen;
  connection.onmessage = onMessage;
}

function onOpen(event) {
  console.log("Connect successful!");
}

function onMessage(event) {
  //Incoming data
  let text = document.createElement('p');
  text.prepend(event.data);
  let textbox = document.getElementById('textbox');
  textbox.prepend(text);
}
function send(){
  connection.send(`${document.getElementsByName('name')[0].value}: ${document.getElementsByName('text')[0].value}`);
}
