const socket = new WebSocket('wss://clouddata.turbowarp.org/');
//クラウド変数更新
function cloudsend(method,user,project_id,name,value) {
	socket.send("".concat(JSON.stringify({"method":method,"user":user,"project_id":project_id,"name":name,"value":value}),"\n"));
}

// 接続が開いたときのイベント
socket.addEventListener('open', function (event) {
	cloudsend("handshake","user","Pasta-kunChat");
});
