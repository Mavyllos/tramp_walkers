var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({title: 'tramp-walkers'});
});

module.exports = router;
