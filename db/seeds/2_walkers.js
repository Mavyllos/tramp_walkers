exports.seed = (knex) => {
   return knex('walkers').del()
     .then(() => {
       return knex('walkers').insert([
         {
           id: 1,
           first_name: 'Glenn',
           last_name: 'Rhee',
           address_line_1: '5314 SW Manning St',
           city: 'Seattle',
           state: 'WA',
           zip: 98116,
           phone_number: 2065551357,
           email_address: 'grhee@hotmail.com',
           bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           image: './images/grhee.jpeg',
           user_id: '6',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
         {
           id: 2,
           first_name: 'Daryl',
           last_name: 'Dixon',
           address_line_1: '4122 20th Ave SW',
           city: 'Seattle',
           state: 'WA',
           zip: 98106,
           phone_number: 2065552495,
           email_address: 'daryl_dixon@yahoo.com',
           bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           image: './images/ddixon.jpg',
           user_id: '16',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
         {
           id: 3,
           first_name: 'Carl',
           last_name: 'Grimes',
           address_line_1: '2641 42nd Ave SW',
           address_line_2: '#3106',
           city: 'Seattle',
           state: 'WA',
           zip: 98116,
           phone_number: 2065557356,
           email_address: 'cgrimes@gmail.com',
           bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           image: './images/cgrimes.jpg',
           user_id: '26',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
         {
           id: 4,
           first_name: 'Rick',
           last_name: 'Grimes',
           address_line_1: '5306 Beach Dr SW',
           city: 'Seattle',
           state: 'WA',
           zip: 98136,
           phone_number: 2065556725,
           email_address: 'rick_grimes@aol.com',
           bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           image: './images/rgrimes.jpg',
           user_id: '36',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
         {
           id: 5,
           first_name: 'Maggie',
           last_name: 'Greene',
           address_line_1: '4426 44th Ave SW',
           address_line_2: 'Apt A',
           city: 'Seattle',
           state: 'WA',
           zip: 98116,
           phone_number: 2065557356,
           email_address: 'maggie_greene@gmail.com',
           bio: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
           image: './images/mgreene.png',
           user_id: '46',
           created_at: new Date('2017-04-21 04:26:16 UTC'),
           updated_at: new Date('2017-04-21 04:26:16 UTC')
         },
       ])
     }).then(() => {
       return knex.raw(
         "SELECT setval('walkers_id_seq', (SELECT MAX(id) FROM walkers));"
       )
     })
 }
