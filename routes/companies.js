var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET companies listing. */
router.get('/', (req, res, next) => {
  db('companies').select('*').then(companies => {
    res.json(companies);
  }).catch(err => {
    console.log(err);
  })
});

module.exports = router;
