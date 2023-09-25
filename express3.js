var express=require('express');
var app =express();
app.get('/form.html',function (req,res){
	res.sendfile(__dirname+"/form.html");
})
app.get('/process_get',function (req,res){
	res.send("<h1>ram ram bhai sariyanae, "+req.query.first_name+"    "+req.query.last_name+"</h1>");
	res.end();
})
var server=app.listen(8080,function(){})

