const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const button = document.getElementById("short");
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/new/:url(*)', (req, res) => {
	var urlToShorten = req.params.url;
	console.log(button);
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ' + port));