/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('armor', (table) => {
    table.increments('id');
    table.string('name');
    table.integer('armor');
    table.float('encumbrance');
    table.integer('gold');
    table.string('upgrade-material');
    table.string('perk');
    table.string('type_armor');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('armor');
};
