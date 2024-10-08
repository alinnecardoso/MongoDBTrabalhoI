use('FoodClub')
db.pedidoEmpresa.insertMany([
{
    "_id": ObjectId(),
    "Numero_Pedido": "12345",
    "Empresa": ObjectId("67047c27307dc91ae8980ad5"),      // Referência à empresa que realizou o pedido
    "Restaurante": ObjectId("67045effd8dce8259d9da76f"),  // Referência ao restaurante que recebeu o pedido
    "pedidos": [
      {
        "Pedido_Funcionario": ObjectId("67047e22ff71575fe56bbddf"),    // Referência aos pratos no pedido
      }
    ] //Colocar data Pedido Empresa
  },
{
    "_id": ObjectId(),
    "Numero_Pedido": "12345",
    "Empresa": ObjectId("67047c27307dc91ae8980ad6"),      // Referência à empresa que realizou o pedido
    "Restaurante": ObjectId("67045effd8dce8259d9da770"),  // Referência ao restaurante que recebeu o pedido
    "pedidos": [
      {
        "Pedido_Funcionario": ObjectId("67047e22ff71575fe56bbde0"),    // Referência aos pratos no pedido
      }
    ]
  },
{
    "_id": ObjectId(),
    "Numero_Pedido": "12345",
    "Empresa": ObjectId("67047c27307dc91ae8980ad7"),      // Referência à empresa que realizou o pedido
    "Restaurante": ObjectId("67045effd8dce8259d9da771"),  // Referência ao restaurante que recebeu o pedido
    "pedidos": [
      {
        "Pedido_Funcionario": ObjectId("67047e22ff71575fe56bbde1"),    // Referência aos pratos no pedido
      }
    ]
  },
{
    "_id": ObjectId(),
    "Numero_Pedido": "12345",
    "Empresa": ObjectId("67047c27307dc91ae8980ad8"),      // Referência à empresa que realizou o pedido
    "Restaurante": ObjectId("67045effd8dce8259d9da772"),  // Referência ao restaurante que recebeu o pedido
    "pedidos": [
      {
        "Pedido_Funcionario": ObjectId("67047e22ff71575fe56bbde2"),    // Referência aos pratos no pedido
      }
    ]
  }])

