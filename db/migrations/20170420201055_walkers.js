exports.up = (knex) => {
return knex.schema.createTable('walkers', table => {
  table.increments()
  table.varchar(60)('first_name').notNullable()
  table.varchar(60)('last_name').notNullable()
  table.varchar(255)('address_line_1').notNullable()
  table.varchar(255)('address_line_2')
  table.varchar(60)('city').notNullable()
  table.char(2)('state').notNullable()
  table.integer('zip').notNullable()
  table.varchar(12)('phone_number').notNullable()
  table.varchar(60)('email_address').notNullable()
  table.string('bio').notNullable()
  table.bytea('image')
  table.integer('user_id').notNullable()
  table.timestamps(true, true)
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('walkers')
}
