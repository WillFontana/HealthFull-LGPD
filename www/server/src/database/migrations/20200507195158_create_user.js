exports.up = function(knex) {
  return knex.schema.createTable('users', (table)=>{
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('password').notNullable();
  })
};

// Método para caso algo de errado no up (retorno de segurança)
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
