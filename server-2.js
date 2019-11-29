const http = require('http')
const WebSocketServer = require("websocket").server;

let httpServer = http.createServer((req, res) => {
  res.end("Request Received");
})

const wsServer = new WebSocketServer({"httpServer": httpServer});

httpServer.listen(6000);
console.info("OPENED on port 6000");
