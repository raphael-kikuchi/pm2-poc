const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world v2\n');
}).listen(8000);
