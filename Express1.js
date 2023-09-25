var express=require('express');
var app =express();

app.get('/',function (req,res){
	res.send('<H!>Hello World From Express1.js file</h1>');
})
app.get('/other',function (req,res){
	res.send('<H!>Hello World </h1>');
})
var server =app.listen(8080,function(){});