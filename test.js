const socket = new WebSocket('wss://192.168.0.40:10005/');
function send(){
  socket.send(`${document.getElementsByName('name')[0].value}: ${document.getElementsByName('text')[0].value}`);
}
socket.addEventListener('message', (event) => {
  let text = document.createElement('p');
  text.prepend(event.data);
  let textbox = document.getElementById('textbox');
  textbox.prepend(text);
});
