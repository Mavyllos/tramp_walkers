exports.up = (knex) => {
return knex.schema.createTable('companies', table => {
  table.increments()
  table.text('image_url').notNullable()
  table.string('name').notNullable()
  table.string('kind').notNullable()
  table.string('breed').notNullable()
  table.integer('age').notNullable()
  table.string('description').notNullable()
  table.boolean('is_adopted').notNullable()
  table.timestamps(true, true)
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('companies')
}
