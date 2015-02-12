
var express = require('express');
var morgan = require('morgan')

var app = express();

app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/news', function (req, res) {
  res.send('Hello. Welcome to the News Room!')
})

app.get('/Bio', function (req, res) {
  res.send('Hello. Here\'s all about me!')
})

app.listen(3000, '0.0.0.0', function() {
	console.log("server listening...")
} );