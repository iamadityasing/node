var http=require('http');
// var myDate=require('./myfirstmodule');
/*var uc=require('upper-case');*/
var fs=require('fs');
http.createServer(function(req,res){
	/*res.writeHead(200,{'content-type':'text/html'});
	res.write("<h3> Hello World");
	res.write("<p>"+req.url+"</p></h3>");
	res.write(myDate.myDateTime()+"</h1>");
	res.end();*/
	fs.readFile('index.html',function(err,data){
		res.writeHead(200,{'content-type':'text/html'});
		res.write(data);
		res.end();
	});
	fs.readFile('./Stan-lee_pic.jpg',function(err,data){
	res.writeHead(200,{'content-type':'image/jpg'});
	res.write(data);
	res.end();
});
}).listen(8080);



















