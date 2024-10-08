//Lista pratos com valor acima de 17
use('FoodClub')
db.pratos.find({"preco":{$gt:17}})

//Listar todos pedidos de um Funcionario
use('FoodClub')
db.Pedido_Funcionarios.find({"Funcionario":ObjectId("67046202e095f5c86ed78987")})

//Contar quantos Funcionarios uma empresa Possui
use('FoodClub')
db.empresa.aggregate([   { $match: { "_id": ObjectId("67047c27307dc91ae8980ad8") } },   
    { $project: { "Total_Funcionarios": { $size: "$Funcionarios" } } } ])
    
//encontrar todos pedidos de uma empresa especifica
    
use('FoodClub')
db.pedidoEmpresa.find({ "Empresa": ObjectId("67046589e8b2a62069a016d8") })


//Quantidade de funcionarios de uma empresa

use('FoodClub')
db.empresa.aggregate([
    { 
        $match: { "_id": ObjectId("67046589e8b2a62069a016d8") }
    },
    { 
        $project: { 
            "Nome_Empresa": "Jurid",                              
            "Total_Funcionarios": { $size: "$Funcionarios" }  
        } 
    }
])


//Consulta 1: Encontrar Restaurantes em um Raio Específico de um Ponto
use('FoodClub')
db.restaurantes.find({
    local: {
        $near: {
            $geometry: {
                type: "Point",
                coordinates: [-47.490780, -23.502140]  // Longitude, Latitude
            },
            $maxDistance: 300
        }
    }
});


//Consulta 2: Encontrar Restaurantes em um Polígono Definido


use('FoodClub')
const poligono = {
    type: "Polygon",
    coordinates: [[
        [-40.495, -23.504],  // Ponto 1
        [-40.495, -23.700],  // Ponto 2
        [-47.485, -23.700],  // Ponto 3
        [-47.485, -23.504],  // Ponto 4
        [-40.495, -23.504]   // Ponto de fechamento
    ]]
};

db.restaurantes.find({
    local: {
        $geoWithin: {
            $geometry: poligono
        }
    }
});

//Junção para Obter Detalhes do Restaurante Junto com os Pedidos
use('FoodClub')
db.pedidoEmpresa.aggregate([
    {
        $lookup: {
            from: "restaurantes",                // Nome da coleção para junção
            localField: "Restaurante",       // Campo na coleção pedidos
            foreignField: "_id",                 // Campo na coleção restaurantes
            as: "detalhes_restaurante"           // Nome do campo de saída com detalhes do restaurante
        }
    },
    {
        $unwind: "$detalhes_restaurante"     // Desconstrói o array de detalhes do restaurante
    },
    {
        $project: {
            "id_usuario": 1,
            "Numero_Pedido":1,
            "detalhes_restaurante.nome": 1,     // Nome do restaurante
            "detalhes_restaurante.cnpj": 1       // CNPJ do restaurante
        }
    }
]);

//Junção para Obter Todos os Restaurantes e Seus Pedidos

use('FoodClub')
db.restaurantes.aggregate([
    {
        $lookup: {
            from: "pedidoEmpresa",                     // Nome da coleção para junção
            localField: "_id",                   // Campo na coleção restaurantes
            foreignField: "Restaurante",      // Campo na coleção pedidos que referencia o restaurante
            as: "pedidos"                         // Nome do campo de saída com os pedidos
        }
    },
    {
        $project: {
        "nome": 1,                           // Nome do restaurante
        "cnpj": 1,                           // CNPJ do restaurante
        "pedidos": 1
      }
    }
  ]);