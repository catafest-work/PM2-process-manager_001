//const http = require('http');
import http from 'http';

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, PM2!');
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});
