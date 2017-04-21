exports.up = (knex) => {
return knex.schema.createTable('companies', table => {
  table.increments()
  table.integer('walker_id').notNullable()
  table.varchar(60)('name').notNullable()
  table.string('description').notNullable()
  table.bytea('logo_img')
  table.string('url')
  table.timestamps(true, true)
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('companies')
}
