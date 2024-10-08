use('FoodClub')
db.empresa.insertMany([
  {
    "_id": ObjectId(),
    "Nome_Empresa": "FastFoodExpress",
    "CNPJ": "98.765.432/0001-21",
    "Endereco": {
      "Rua": "Rua das Palmeiras",
      "Numero": "456",
      "CEP": "87654-321",
      "Cidade": "Rio de Janeiro",
      "Estado": "RJ"
    },
    "Funcionarios": [ObjectId("67047b60b8f862da6846ce7e")],
    "Restaurantes": [ObjectId("67045effd8dce8259d9da773")]
  },
  {
    "_id": ObjectId(),
    "Nome_Empresa": "TechMeals",
    "CNPJ": "11.222.333/0001-44",
    "Endereco": {
      "Rua": "Av. Tecnológica",
      "Numero": "789",
      "CEP": "98765-432",
      "Cidade": "Campinas",
      "Estado": "SP"
    },
    "Funcionarios": [ObjectId("67047b60b8f862da6846ce7f")],
    "Restaurantes": [ObjectId("67045effd8dce8259d9da771")]
  },
  {
    "_id": ObjectId(),
    "Nome_Empresa": "GourmetHouse",
    "CNPJ": "22.333.444/0001-55",
    "Endereco": {
      "Rua": "Rua Gourmet",
      "Numero": "321",
      "CEP": "12312-321",
      "Cidade": "Curitiba",
      "Estado": "PR"
    },
    "Funcionarios": [ObjectId("67047b60b8f862da6846ce80")],
    "Restaurantes": [ObjectId("67045effd8dce8259d9da770")]
  },
  {
    "_id": ObjectId(),
    "Nome_Empresa": "UrbanEats",
    "CNPJ": "33.444.555/0001-66",
    "Endereco": {
      "Rua": "Rua das Nações",
      "Numero": "654",
      "CEP": "54321-098",
      "Cidade": "Belo Horizonte",
      "Estado": "MG"
    },
    "Funcionarios": [ObjectId("67047b60b8f862da6846ce81"),("67047b60b8f862da6846ce82")],
    "Restaurantes": [ObjectId("67045effd8dce8259d9da76f")]
  }
])
