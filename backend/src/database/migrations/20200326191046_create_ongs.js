
exports.up = function (knex) {
  return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
        table.timestamp('createdAt',{ useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updatedAt',{ useTz: true }).defaultTo(knex.fn.now());
    })

};

exports.down = function (knex) {
   return knex.schema.dropTable('ongs')
};
