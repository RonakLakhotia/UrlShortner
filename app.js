const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const shortUrl = require('./models/shortUrl');
var typeOfError = '';
var isError = false;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/shortUrls')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/new/:url(*)', (req, res) => {
var urlToShorten = req.params.url;
res.send(urlToShorten)
});

app.post('/newUrl', (req, res) => {
console.log(req.body);
if (typeof req.body.url === 'undefined') {
	    res.status(400).json({ error: 'missing parameter', data: null }); // Only an  example
	    return;
	}
	let url = req.body.url;
	//regex
	var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
	if (regex.test(url) === false) {
		isError = true;
		typeOfError = 'Incorrect url expression';
	} else {
		//create the short url
		var short = "short/" + Math.floor(Math.random() * 10000).toString();

		var data = new shortUrl(
		{
			originalUrl: url,
			shorterUrl: short
		});

		data.save(err => {
			if (err) {
				typeOfError = 'Failed to store in Database';
				isError = true;
			}
		})
	}
	if (isError) {
		var data = new shortUrl(
		{
			originalUrl: url,
			shorterUrl: typeOfError
		});
	}
	res.send(data);
});

//Query original database


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ' + port));