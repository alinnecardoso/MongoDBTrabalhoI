const fs = require('fs');

const dadosPratos = fs.readFileSync('json/pratos.json');

const jsonPratos = JSON.parse(dadosPratos);

db.pratos.insertMany(jsonPratos);

use('FoodClub')
db.pratos.find();
