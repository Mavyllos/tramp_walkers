var express = require('express');
var router = express.Router();
var db = require('../db/connection.js')

/* GET walkers listing. */
router.get('/', (req, res, next) => {
  db('walkers')
  .then(walkers => {
    res.json(walkers);
  })
  .catch(err => {
    console.log(err);
  })
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('walkers')
  .where({id})
  .first()
  .then(walker => {
    res.json(walker)
  })
  .catch(err => {
    console.log(err);
  })
});

// router.get('./id/edit', (req, res, next){
//
// })

router.post('/', (req, res, next) => {
  var walker = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address_line_1: req.body.address_line_1,
    address_line_2: req.body.address_line_2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phone_number: req.body.phone_number,
    email_address: req.body.email_address,
    bio: req.body.bio,
    image: req.body.image,
    user_id: req.body.user_id
  }
  db('walkers')
  .insert(walker, '*')
  .then(walker => {
    var id = walker[0].id;
    res.json(walker)
  })
  .catch(err => {
    console.log(err);
  })
});

router.delete('/:id', (req, res, next) => {
  var id = req.params.id
  db('walkers')
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
  var walker = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    address_line_1: req.body.address_line_1,
    address_line_2: req.body.address_line_2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    phone_number: req.body.phone_number,
    email_address: req.body.email_address,
    bio: req.body.bio,
    image: req.body.image,
    user_id: req.body.user_id
  }
  db('walkers')
  .update(walker, '*')
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
