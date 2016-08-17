var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('angularMarket', ['angularMarket']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());


//GET
app.get('/mock', function(req, res) {
	console.log("I've got a GET request")
	db.angularMarket.find(function(err, docs){
		res.json(docs)
	})
})

//POST
app.post('/mock', function(req, res){
	console.log(req.body);
	db.angularMarket.insert(req.body, function(err, doc) {
		res.json(doc);
	})
})

//DELETE
app.delete('/mock/:id', function(req, res){
	var id = req.params.id;
	console.log(id);

	db.angularMarket.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	})
	
})

app.listen(3000);

console.log("Server running on port 3000")