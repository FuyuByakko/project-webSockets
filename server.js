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
  // connection.on("open", () => {console.log("OPEN!")})
  // connection.on("closed", () => {console.log("CLOSED!")})
  connection.on("message", (message) => {
    console.log(`received: ${message.utf8Data}`);
    connections.forEach(connection => {
      connection.send(message.utf8Data);
    })
  })
  setInterval(() => {connection.send(new Date())}, 5000); 

})

httpServer.listen(8080);
console.log("OPENED on port 8080");
