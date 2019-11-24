const http = require('http')

let httpServer = http.createServer((req, res) => {
  res.end("Request Received");
})

httpServer.listen(8080);
console.log("OPENED on port 8080");
