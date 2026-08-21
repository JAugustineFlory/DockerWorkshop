const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

exports.seed = async function (knex) {
    await knex('weapons').del();

    const filePath = path.join(__dirname, 'data', 'dataset_weapons_skyrim_1.csv');
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true,
    });

    //map CSV columns to table
    const rows = records.map(record => ({
        name: record.name,
        damage: parseInt(record.damage, 10),
        weight: parseInt(record.weight, 10),
        gold: parseInt(record.gold, 10),
        upgrade_material: record.upgrade,
        perk: record.perk,
        category: record.category,
        speed: record.speed,
    }));

    await knex('weapons').insert(rows);
}