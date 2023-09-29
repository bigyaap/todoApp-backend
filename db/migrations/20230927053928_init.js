/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) { //new changes you want to do
    return knex.schema.createTable('todo', table => {
        table.increments('id')
        table.string('title').notNullable()
        table.timestamps(true, true)
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) { //rollback (undo)
    return knex.schema.dropTable('todo')
};
