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

    const rows = records.map(record => ({
        name: record.name,
        armor: parseInt(record.armor, 10),
        encumbrance: parseFloat(record.encumbrance),
        gold: parseInt(record.gold, 10),
        upgrade-material: record.upgrade-material,
        perk: record.perk,
        type_armor: r.type_armor,
    }));

    await knex('armor').insert(rows);
}