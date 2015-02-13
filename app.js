
var express = require('express');
var morgan = require('morgan')
var swig = require('swig')
var routes = require('./routes/')

var app = express();

swig.setDefaults({ cache: false });

/* App USE
Intercepts ALL requests to the app
e.g. becuase there is an app.use that pulls in routes directory... any routes defined in the home app.js are BYPASSED.
*/

app.use(morgan('dev'));
app.use('/', routes);

// 'Static' files don't need custom handlers like dynamic pages do
// express method for designating entire folders as static file sources 
// makes everything in directory accessible via URI path
// (as if it was a file path...)
// Even though it IS NOT.
app.use(express.static(__dirname + '/public'));


app.engine('html', swig.renderFile);
app.set('views', __dirname + '/views');
app.set('view engine', 'html');


// *****************
// Homepage Routes
// ****************

// app.get('/', function (req, res) {
// 	var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// 	res.render( 'index', {title: 'Hall of Fame', people: people} );
// })

// accept POST request on the homepage
app.post('/', function (req, res) {
  res.send('Got a POST request');
})

// accept PUT request at /user
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
})

// accept DELETE request at /user
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
})


// ****************
// Other Routes
// ****************

// app.get('/news', function (req, res) {
//   res.send('Hello. Welcome to the News Room!')
// })

// app.get('/Bio', function (req, res) {
//   res.send('Hello. Here\'s all about me!')
// })

app.listen(3000, '0.0.0.0', function() {
	console.log("server listening...")
} );

