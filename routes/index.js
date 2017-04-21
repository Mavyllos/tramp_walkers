var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(comapnies);
});

module.exports = router;
