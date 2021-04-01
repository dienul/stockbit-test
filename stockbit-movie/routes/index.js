var express = require('express');
var router = express.Router();

const movie = require('./movie')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/movie', movie)

module.exports = router;
