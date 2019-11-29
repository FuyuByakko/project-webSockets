const http = require('http')
const WebSocketServer = require("websocket").server;
let connection;

let httpServer = http.createServer((req, res) => {
  res.end("Request Received");
})

const wsServer = new WebSocketServer({"httpServer": httpServer});
wsServer.on("request", request => {
  connection = request.accept(null, request.origin);
  console.info("New Connection Created!");
  setInterval(() => {connection.send(new Date())}, 5000)
})


httpServer.listen(6001);
console.info("OPENED on port 6001");
