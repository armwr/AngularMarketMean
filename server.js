var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/mock', function(req, res) {
	console.log("I've got a GET request")

	var data = [
	{
		"title":"ButterFly Knife",
		"price":"164",
		"description":"Te eligendi volutpat constituto mea, commodo constituto no cum. Quo eu virtute patrioque, has nostro repudiandae ei, sea at quando apeirian posidonium. Enim vivendum assentior eos in, cu sed eius nihil consul, dicit percipit ut vis. An pro assum tantas singulis, eros summo democritum te vis, sed ad tempor tibique. In mei laoreet platonem, quod ancillae ad ius, nam vide erat maluisset no.",
		"image":"https://s-media-cache-ak0.pinimg.com/736x/76/11/70/7611701a72d48a3c3f3072e1caf60e0e.jpg",
		"contact":{
			"name":"Dobra",
			"number":"555-555-555",
			"email":"Dobra@mail.ru",
			"info":"Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support."
		},
		"categories": [
		"Knife"
		]
	},
	{
		"title":"Bowie Knife",
		"price":"168",
		"description":"Te eligendi volutpat constituto mea, commodo constituto no cum. Quo eu virtute patrioque, has nostro repudiandae ei, sea at quando apeirian posidonium. Enim vivendum assentior eos in, cu sed eius nihil consul, dicit percipit ut vis. An pro assum tantas singulis, eros summo democritum te vis, sed ad tempor tibique. In mei laoreet platonem, quod ancillae ad ius, nam vide erat maluisset no.",
		"image":"http://media.steampowered.com/apps/csgo/images/operationwildfire/slides/11_18.jpg",
		"contact":{
			"name":"Dobra",
			"number":"555-555-555",
			"email":"Dobra@mail.ru",
			"info":"Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support."
		},
		"categories": [
		"Knife"
		]
	},
	{
		"title":"Sawed-Off | Highwayman",
		"price":"4",
		"description":"Te eligendi volutpat constituto mea, commodo constituto no cum. Quo eu virtute patrioque, has nostro repudiandae ei, sea at quando apeirian posidonium. Enim vivendum assentior eos in, cu sed eius nihil consul, dicit percipit ut vis. An pro assum tantas singulis, eros summo democritum te vis, sed ad tempor tibique. In mei laoreet platonem, quod ancillae ad ius, nam vide erat maluisset no.",
		"image":"http://media.steampowered.com/apps/csgo/images/operationvanguard/slides/sawedoff.jpg",
		"contact":{
			"name":"Dobra",
			"number":"555-555-555",
			"email":"Dobra@mail.ru",
			"info":"Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support."
		},
		"categories": [
		"Shotgun"
		]
	},
	{
		"title":"AK-47 | Wasterland Rebel",
		"price":"102",
		"description":"Te eligendi volutpat constituto mea, commodo constituto no cum. Quo eu virtute patrioque, has nostro repudiandae ei, sea at quando apeirian posidonium. Enim vivendum assentior eos in, cu sed eius nihil consul, dicit percipit ut vis. An pro assum tantas singulis, eros summo democritum te vis, sed ad tempor tibique. In mei laoreet platonem, quod ancillae ad ius, nam vide erat maluisset no.",
		"image":"http://i.imgur.com/knVDONV.jpg",
		"contact":{
			"name":"Dobra",
			"number":"555-555-555",
			"email":"Dobra@mail.ru",
			"info":"Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support."
		},
		"categories": [
		"Machine"
		]
	},
	{
		"title":"R8 Revolver | Fade",
		"price":"30",
		"description":"Te eligendi volutpat constituto mea, commodo constituto no cum. Quo eu virtute patrioque, has nostro repudiandae ei, sea at quando apeirian posidonium. Enim vivendum assentior eos in, cu sed eius nihil consul, dicit percipit ut vis. An pro assum tantas singulis, eros summo democritum te vis, sed ad tempor tibique. In mei laoreet platonem, quod ancillae ad ius, nam vide erat maluisset no.",
		"image":"http://media.steampowered.com/apps/csgo/blog/images/r8/r8_17.jpg",
		"contact":{
			"name":"Dobra",
			"number":"555-555-555",
			"email":"Dobra@mail.ru",
			"info":"Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support."
		},
		"categories": [
		"Pistol"
		]
	},
	{
		"title":"Karambit | Rust Coat",
		"price":"400",
		"description":"Te eligendi volutpat constituto mea, commodo constituto no cum. Quo eu virtute patrioque, has nostro repudiandae ei, sea at quando apeirian posidonium. Enim vivendum assentior eos in, cu sed eius nihil consul, dicit percipit ut vis. An pro assum tantas singulis, eros summo democritum te vis, sed ad tempor tibique. In mei laoreet platonem, quod ancillae ad ius, nam vide erat maluisset no.",
		"image":"https://www.gamesites.cz/js/filemanager/uploads/Redakce/Sigmousek/20.jpg",
		"contact":{
			"name":"Dobra",
			"number":"555-555-555",
			"email":"Dobra@mail.ru",
			"info":"Donate: If you use this site regularly and would like to help keep the site on the Internet, please consider donating a small sum to help pay for the hosting and bandwidth bill. There is no minimum donation, any sum is appreciated - click here to donate using PayPal. Thank you for your support."
		},
		"categories": [
		"Knife"
		]
	}
	]

	res.json(data)
})

app.listen(3000);

console.log("Server running on port 3000")