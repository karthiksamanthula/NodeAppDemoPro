//exp of asynchronus -->javascript is synchronous and nodejs js is an asynchronous

var http=require('http')
var express=require('express')
var request = require('request');
var Sync=require('sync')
var http=require('http')


app=express()

function start()
{
	console.log('program starts')
}

function ends()
{
	console.log('program ends')
}

//node js creating server


//Asynchronous
 app.get('/get',(req,res)=>
 {
	console.log('i am Asynchronous');
	 start()
	request('https://reqres.in/api/users?page=2',
	function (error, response, body) {
		res.send(body)
		console.log('inside request api(get) printing response');
		
		
 })

 ends()
 })


//synchronous

 app.get('/home',(req, res)=>
 {
	console.log('i am synchronous');
	
	  start()

		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello!!!!!!!! i am karthik');
		
		console.log('helo home page');
	
	ends()
	
 })

.listen(1144)

