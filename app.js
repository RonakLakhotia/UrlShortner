const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

app.get('/new/:url(*)', (req, res) => {
	var urlToShorten = req.params.url;
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening on port ' + port));