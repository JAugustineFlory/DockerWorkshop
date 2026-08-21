const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

exports.seed = async function (knex) {
    await knex('armor').del();

    const filePath = path.join(__dirname, 'data', 'dataset_armor_skyrim_1.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    });

    await knex('armor').insert(rows);
}