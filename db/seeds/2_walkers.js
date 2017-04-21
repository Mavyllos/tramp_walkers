exports.seed = (knex) => {
   return knex('walkers').del()
     .then(() => {
       return knex('walkers').insert([
         {
           id: 1,
           name: '',
           kind: '',
           breed: '',
           age: '',
           description: '',
           is_adopted: '',
           image_url: ''
         },
         {
           id: 2,
           name: '',
           kind: '',
           breed: '',
           age: '',
           description: '',
           is_adopted: '',
           image_url: ''
         },
         {
           id: 3,
           name: '',
           kind: '',
           breed: '',
           age: '',
           description: '',
           is_adopted: '',
           image_url: ''
         },
         {
           id: 5,
           name: '',
           kind: '',
           breed: '',
           age: '',
           description: '',
           is_adopted: '',
           image_url: ''
         },
         {
           id: 5,
           name: '',
           kind: '',
           breed: '',
           age: '',
           description: '',
           is_adopted: '',
           image_url: ''
         },
       ])
     }).then(() => {
       return knex.raw(
         "SELECT setval('walkers_id_seq', (SELECT MAX(id) FROM walkers));"
       )
     })
 }
