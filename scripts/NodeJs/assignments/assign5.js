const fs = require("fs");
const http = require("http");

const serverPort = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });

    fs.createReadStream("text.txt", "utf8").pipe(res);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
});

server.listen(serverPort, () => {
  console.log(`Server running at http://localhost:${serverPort}/`);
});
