const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const shortUrl = require('./models/shortUrl');

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
		req.body.url = 'Failed';
	}
	res.send(req.body);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ' + port));