exports.seed = (knex) => {
   return knex('companies').del()
     .then(() => {
       return knex('companies').insert([
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
         "SELECT setval('companies_id_seq', (SELECT MAX(id) FROM companies));"
       )
     })
 }
