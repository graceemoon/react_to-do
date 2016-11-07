const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');

const homeRoute = require('./routes/home');
const taskRoute = require('./routes/task');

//This tests to see if we have NODE_ENV in our environment.
//Only load the dotenv if we need it.
const isDev = !('NODE_ENV' in process.env) && require('dotenv').config() && true;

const app = express();
const PORT = process.env.PORT || 3000;

//set up some logging
app.use(logger(isDev ? 'dev' : 'common'));

//we're only going to accept json
app.use(bodyParser.json());

//generic error handler
app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).send('Something broke!');
})

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRoute);
app.use('/task', taskRoute);


app.listen(PORT, () => console.log('Listening on port ', PORT));
