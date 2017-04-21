exports.up = (knex) => {
return knex.schema.createTable('companies', table => {
  table.increments()
  table.integer('walkers_id').notNullable()
  table.varchar(60)('name').notNullable()
  table.string('description').notNullable()
  table.bytea('logo_img').notNullable()
  table.string('url').notNullable()
  table.timestamps(true, true)
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('companies')
}
