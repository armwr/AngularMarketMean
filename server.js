var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('angularMarket', ['angularMarket'])

app.use(express.static(__dirname + "/public"));

app.get('/mock', function(req, res) {
	console.log("I've got a GET request")

	db.angularMarket.find(function(err, docs){
		console.log(docs);
		res.json(docs)
	})
})

app.listen(3000);

console.log("Server running on port 3000")