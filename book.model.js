const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const BookSchema = new Schema({
    title: String,
    gender: String,
    author: String,
    year: String,
});

module.exports = mongoose.model('books', BookSchema);