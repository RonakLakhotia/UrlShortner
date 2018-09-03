const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const urlScheme = new Schema({
	originalUrl: String,
	shorterUrl: String
}, {timestamps: true});

const ModelClass = mongoose.model('shortUrl', urlScheme);

module.exports = ModelClass; 
