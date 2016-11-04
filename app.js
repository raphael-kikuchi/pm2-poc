const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world v1\n');
}).listen(8000);