const http = require('http')
const WebSocketServer = require("websocket").server;

let httpServer = http.createServer((req, res) => {
  res.end("Request Received");
})

const wsServer = new WebSocketServer({"httpServer": httpServer});
wsServer.on("request", request => {
  connection = request.accept(null, request.origin);
  console.log("New Connection Created!");
})

httpServer.listen(8080);
console.log("OPENED on port 8080");
