
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments();
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        table.timestamp('createdAt',{ useTz: true }).defaultTo(knex.fn.now());
        table.timestamp('updatedAt',{ useTz: true }).defaultTo(knex.fn.now());

        table.string('ong_id').notNullable();

        table.foreign('ong_id').references('id').inTable('ongs')
    })

};

exports.down = function(knex) {
   return knex.schema.dropTable('incidents')
};
