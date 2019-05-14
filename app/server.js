const express = require('express');

const app = express();

app.get('/mano', (req, res)=>{
    res.send("Olá")
});

module.exports = app;