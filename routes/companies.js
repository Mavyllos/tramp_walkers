var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET companies listing. */
router.get('/', (req, res, next) => {
  db('companies')
  .then(companies => {
    res.json(companies);
  })
  .catch(err => {
    console.log(err);
  })
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('companies')
  .where({id})
  .first()
  .then(company=> {
    res.json(company)
  })
  .catch(err => {
    console.log(err);
  })
});

// router.get('./id/edit', (req, res, next){
//
// })

router.post('/', (req, res, next) => {
  var company= {
    walker_id: req.body.walker_id,
    name: req.body.name,
    description: req.body.description,
    logo_img: req.body.logo_img,
    url: req.body.url
  }
  db('companies')
  .insert(company, '*')
  .then(company=> {
    var id = company[0].id;
    res.json(company)
  })
  .catch(err => {
    console.log(err);
  })
});

router.delete('/:id', (req, res, next) => {
  var id = req.params.id
  db('companies')
  .del()
  .where({ id })
  .returning('*')
  .then(deleted => {
    res.json(deleted)
  })
  .catch(err => {
      console.log(err);
    })
});

router.put('/:id', (req, res, next) => {
  var id = req.params.id
  var company= {
    walker_id: req.body.walker_id,
    name: req.body.name,
    description: req.body.description,
    logo_img: req.body.logo_img,
    url: req.body.url
  }
  db('companies')
  .update(company, '*')
  .where({ id })
  .returning('*')
  .then(updated => {
    res.json(updated)
  })
  .catch(err => {
    console.log(err);
  })
});

module.exports = router;
