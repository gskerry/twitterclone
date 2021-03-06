
var express = require('express');
var router = express.Router();

var tweetBank = require('../tweetBank');

router.get('/', function(req, res){
	var tweets = tweetBank.list();
	res.render('index', {title: 'Twitter,js', tweets: tweets} );
})

// router.get( '/users/:name', function (req, res) {
//   console.log( req.params.name ); // --> 'nimit'
// });


// req.params captures info about what was entered into the URI
// the ":" part of the URI gets stored.
// can then return/store in variable req.params.whatever 
 
router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: list } );
});

router.get('/users/:name/tweets/:id', function(req, res) {
  var name = req.params.name;
  console.log(name)
  var id = req.params.id;
  console.log(id)
  // N.B. req.params returns STRINGS!!!!!!!
  var list = tweetBank.find( {name: name, id: Number(id)} );
  console.log(list);
  res.render( 'index', { title: name+', Post#: '+id, tweets: list } );
});


module.exports = router;



/*

showForm: true

*/