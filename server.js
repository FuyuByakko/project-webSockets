const http = require('http')
const WebSocketServer = require("websocket").server;
let connections = [];

let httpServer = http.createServer((req, res) => {
  res.end("Request Received");
})

const wsServer = new WebSocketServer({"httpServer": httpServer});
wsServer.on("request", request => {
  connection = request.accept(null, request.origin);
  connections.push(connection);
  console.log("New Connection Created!");
  connection.on('message', message => {
    console.log(message.utf8Data);
    connections.forEach(link => {
      link.send(`${message.utf8Data}`);
    });
  })
})


httpServer.listen(8080);
console.log("OPENED on port 8080");
