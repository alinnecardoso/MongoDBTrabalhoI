const fs = require('fs');

const dadosRestaurantes = fs.readFileSync('json/restaurantes.json');

const jsonRestaurantes = JSON.parse(dadosRestaurantes);

db.restaurantes.insertMany(jsonRestaurantes);
