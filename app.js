
var express = require('express');
var morgan = require('morgan')
var swig = require('swig')

var app = express();

swig.setDefaults({ cache: false });

app.use(morgan('dev'))

app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');


app.get('/', function (req, res) {
	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
	res.render( 'index', {title: 'Hall of Fame', people: people} );
})

// app.get('/news', function (req, res) {
//   res.send('Hello. Welcome to the News Room!')
// })

// app.get('/Bio', function (req, res) {
//   res.send('Hello. Here\'s all about me!')
// })

app.listen(3000, '0.0.0.0', function() {
	console.log("server listening...")
} );