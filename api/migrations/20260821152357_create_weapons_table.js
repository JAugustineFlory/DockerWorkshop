/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('weapons', table () => {
    table.incrememnts('id');
    table.string('name');
    table.integer('damage');
    table.integer('weight');
    table.integer('gold');
    table.string('upgrade-material');
    table.string('perk');
    table.string('category');
    table.string('speed');
    table.timestamps(true, true);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('weapons');
};
