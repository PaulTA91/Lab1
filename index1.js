const http = require('http');
http.createServer(function(req, res) {
res.writeHead(200,
{ 'Content-type': 'html' });
res.write('<h1>welcome to my application!</h1>');
res.write('<div>This response is sent using node.js</div>');
res.end('<div>Have a nice day!</div>');
}).listen(3000);
console.log('Server started on port 3000, ctrl^c to quit.');