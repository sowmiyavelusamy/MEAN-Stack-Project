var express = require('express');
var app = express();

var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);

var bodyParser = require('body-parser');


app.use(express.static(__dirname + "/publicFile"));
app.use(bodyParser.json());

app.get('/list', function(req,res){
	console.log("I recieved a GET request")
	db.contactlist.find(function(req,docs){
		console.log("docs");

		res.json(docs);
	});


	/*personone = {
		name: 'sowmiya',
		email:'sowmi666@gmail.com',
		mobile:'11 22 33'

	};

	persontwo = {
		name: 'Linda',
		email:'linda@gmail.com',
		mobile:'22 55 77'

	};

	personthree = {
		name: 'Madhu',
		email:'madhupms@gmail.com',
		mobile:'44 00 88'

	};

	var contactList = [personone, persontwo, personthree];
	//res.json(contactList);*/
});
	app.post('/list', function(req,res){
		console.log(req.body);
		db.contactlist.insert(req.body, function(err, doc){
			res.json(doc);
		})
	
});

app.listen(3000);
console.log("server running on port 3000");