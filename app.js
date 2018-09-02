const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
app.use(bodyParser.json());
app.use(cors());