const http = require('http')

let httpServer = http.createServer((req, res) => {
  res.end("Request Received");
})

httpServer.listen(6000);
console.info("OPENED on port 6000");
