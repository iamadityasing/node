var express=require('express');
var cookieParser=require('cookie-parser');
var app =express();
app.use(cookieParser());
app.get('/cookieset',function(req,res){
	res.cookie('cookie_name','cookie_value');
	res.cookie('company','PSIT');
	res.cookie('name','CS-AI&ML');
	res.send('<h1> Cookie is set</h1>');
	res.end();
});
app.get('/cookieget',function(req,res){
	res.send("<h1>"+req.cookies.cookie_name+"<br>"+req.cookies.company+"<br>"+req.cookies.name+"</h1>");
	res.end();
});
app.get('/',function(req,res){
	res.send('<h1>Welcome</h1>');
	res.end();	
});
app.get('/clearcookie',function(req,res){
	res.clearCookie('cookie_name');
	res.clearCookie('name');
	res.send('Cookie deleted');
});
var server=app.listen(8080,function(){})

