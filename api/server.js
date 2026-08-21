const express = require('express');
const app = express();
const knex = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development']);
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('My API is up and running Yo!');
});

const ALLOWED_TABLES = ['armor', 'weapons'];

app.get('/:type', (req, res) => {
    const type = req.params.type;
    if (!ALLOWED_TABLES.includes(type)) {
        return res.status(404).json({message: 'Not found' })
    }
    knex.select()
    .from(type)
    .then(data => res.status(200).json(data))
    .catch(err => res.status(400).json({message: `Error: ${err}`}))
})

app.get('/:type/:id', (req, res) => {
    const { type, id } = req.params;
    knex.select()
    .from(type)
    .where({ id: id })
    .then(data => res.status(200).json(data[0]))
    .catch(err => res.status(400).json({message: `Error: ${err}`}))
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});