var express=require('express');
var app =express();
app.get('/',function (req,res){
	res.send('<h1>Hello Get</h1>');
})
app.post('/',function (req,res){
	res.send('<h1>Hello Post</h1>');
})
app.delete('/del_user',function (req,res){
	res.send('<h1>Hello Delete</h1>');
})
app.get('/list_user',function (req,res){
	res.send('<h1>Page LIstening</h1>');
})
app.get('/ab*cd',function (req,res){
	res.send('<h1>Page pattern match</h1>');
})
var server=app.listen(8080,function(){})