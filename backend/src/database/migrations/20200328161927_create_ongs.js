//Método que será executado
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
    table.string('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  });  
};
//Se der algum problema, preciso resolver
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

//Para criar a tabela, executamos: npx knex migrate:latest
