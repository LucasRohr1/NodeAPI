const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('hello from server');
    res.status(200);
    res.json({ message: 'Hello from server' });
})

module.exports = app;
