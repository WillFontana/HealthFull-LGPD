
exports.up = function (knex) {
  return knex.schema.createTable('profile', (table) => {
    table.string('id').primary();
    table.string('age').nullable();
    table.string('job').nullable();
    table.string('city').nullable();
    table.string('uf').nullable();
    table.boolean('student').nullable();
    table.string('birthday').nullable();
    table.string('user_id').notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('profile');
};
