var http = require('http');
var url=require('url');
const { type } = require('os');
http.createServer(function(req,res){
res.writeHead(200,{'Content-type':'text/html'})
res.write("Hello");
res.write(req.url);
res.end("end");
}).listen(9090);