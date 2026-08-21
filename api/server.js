const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('My API is up and running Yo!');
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});