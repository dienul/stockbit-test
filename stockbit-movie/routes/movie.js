var express = require('express');
var router = express.Router();

const { 
    searchMovie ,
    detailMovie
} = require('../controller/movie')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/search', searchMovie)
router.get('/detail', detailMovie)

module.exports = router;
