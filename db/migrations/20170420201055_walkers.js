exports.up = (knex) => {
return knex.schema.createTable('walkers', table => {
  table.increments()
  table.text('first_name').notNullable()
  table.string('last_name').notNullable()
  table.string('address_line_1').notNullable()
  table.string('address_line_2').notNullable()
  table.integer('city').notNullable()
  table.string('state').notNullable()
  table.string('zip').notNullable()
  table.integer('phone_number').notNullable()
  table.string('email_address').notNullable()
  table.string('bio').notNullable()
  table.integer('image').notNullable()
  table.string('users_id').notNullable()
  table.timestamps(true, true)
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('walkers')
}
