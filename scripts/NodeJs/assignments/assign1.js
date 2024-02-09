const http = require('http');

// hostname and port for your server
const hostname = '127.0.0.1';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {

  // Set the HTTP status code and Content-Type header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

// res.writeHead(200 , {"Content-type": "text/plain"}) // another method

  // Write the response body
  res.end('Hey Sereena Welcome to Web Server!\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});