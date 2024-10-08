use('FoodClub')
db.Pedido_Funcionarios.insertMany([
{
    "_id": ObjectId(),
    "Funcionario": ObjectId("67047b60b8f862da6846ce82"),
    "Pratos": [
      {
        "Prato": ObjectId("67045ef76125c16cc4ae8f48"),
      }
    ]
  },
{
    "_id": ObjectId(),
    "Funcionario": ObjectId("67047b60b8f862da6846ce81"),
    "Pratos": [
      {
        "Prato": ObjectId("67045ef76125c16cc4ae8f49"),
      }
    ]
  },
{
    "_id": ObjectId(),
    "Funcionario": ObjectId("67047b60b8f862da6846ce80"),
    "Pratos": [
      {
        "Prato": ObjectId("67045ef76125c16cc4ae8f4a"),
      }
    ]
  },
{
    "_id": ObjectId(),
    "Funcionario": ObjectId("67047b60b8f862da6846ce7f"),
    "Pratos": [
      {
        "Prato": ObjectId("67045ef76125c16cc4ae8f4b"),
      }
    ]
  }])