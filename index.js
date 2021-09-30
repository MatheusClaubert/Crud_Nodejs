const express = require('express');
const mongoose = require('mongoose');

const app = express();

const config = require('./config')

const routes = require('./routes');

mongoose.connect(`mongodb+srv://${config.user}:${config.password}@cluster0.8m9xd.mongodb.net/library?retryWrites=true&w=majority`, () => console.log('conection granted'));

app.use(express.json());

app.use('/', routes);

app.listen(3333, () => {
    console.log('server running');
});