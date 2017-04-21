var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET walkers listing. */
router.get('/', (req, res, next) => {
  db('walkers').select('*').then(walkers => {
    res.json(walkers);
  }).catch(err => {
    console.log(err);
  })
});

module.exports = router;
