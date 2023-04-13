
from websocket_server import WebsocketServer

def new_client(client, server):
    print('a');
    server.send_message_to_all("New client has joined")
    print('誰かが来た！')

def send_msg_allclient(client, server, message):
    print(message);
    server.send_message_to_all(message)

server = WebsocketServer(port=10000, host='0.0.0.0')
server.set_fn_new_client(new_client)
server.set_fn_message_received(send_msg_allclient)
server.run_forever()
