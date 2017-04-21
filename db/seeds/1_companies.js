exports.seed = (knex) => {
   return knex('companies').del()
     .then(() => {
       return knex('companies').insert([
         {
           id: 1,
           walker_id: '5',
           name: 'SwagDoggie',
           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           logo_img: './images/paw-print-512.jpeg',
           url: 'http://www.sniffseattle.com/',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
         {
           id: 2,
           walker_id: '4',
           name: 'Friend Walkers',
           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           logo_img: './images/paw-print-512.jpeg',
           url: 'http://www.sniffseattle.com/',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
         {
           id: 3,
           walker_id: '3',
           name: 'ZoodleWalk',
           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           logo_img: './images/paw-print-512.jpeg',
           url: 'http://www.sniffseattle.com/',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
         {
           id: 4,
           walker_id: '2',
           name: 'Meg\'s Walkers',
           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           logo_img: './images/paw-print-512.jpeg',
           url: 'http://www.sniffseattle.com/',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
         {
           id: 5,
           walker_id: '1',
           name: 'Red Rover Runners',
           description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           logo_img: './images/paw-print-512.jpeg',
           url: 'http://www.sniffseattle.com/',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
       ])
     }).then(() => {
       return knex.raw(
         "SELECT setval('companies_id_seq', (SELECT MAX(id) FROM companies));"
       )
     })
 }
