use('FoodClub')
db.usuarios.insertOne(
{
    "_id": ObjectId(),
    "Tipo_Usuario": "restaurante",
    "Senha": "restaurante123",
    "Email": "restaurante@email.com",
  })