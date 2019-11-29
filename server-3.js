const http = require('http')
const WebSocketServer = require("websocket").server;

let httpServer = http.createServer((req, res) => {
  res.end("Request Received");
})

const wsServer = new WebSocketServer({"httpServer": httpServer});
wsServer.on("request", request => {
  connection = request.accept(null, request.origin);
  console.info("New Connection Created!");
})

httpServer.listen(6001);
console.info("OPENED on port 6000");
