const http = require('http');

// Create an HTTP server
const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello Holberton School!\n');
});

// Listen on port 1245
app.listen(1245);

module.exports = app;
