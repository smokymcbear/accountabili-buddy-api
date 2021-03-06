exports.up = knex => knex.schema.createTable('users', (table) => {
  table.increments('id').primary();
  table.string('user_name').notNullable().defaultTo('');
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.string('profile_image_url').notNullable().defaultTo('');
  table.string('email').notNullable().unique();
  table.specificType('hashed_password', 'char(60)').notNullable();
  table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('users');
