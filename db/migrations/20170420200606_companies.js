exports.up = (knex) => {
return knex.schema.createTable('companies', table => {
  table.increments()
  table.integer('walker_id').notNullable()
  table.varchar('name', 60).notNullable()
  table.string('description').notNullable()
  table.string('logo_img')
  table.string('url')
  table.timestamps(true, true)
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('companies')
}
