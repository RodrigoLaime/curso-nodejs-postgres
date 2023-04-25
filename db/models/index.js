// configuracion de los modelos para a base de datos
const {User, UserSchema} = require('./user.model');
const {Customer,CustomerSchema} = require("./customer.model");

// configuracion de los modelos
function setupModels(sequelize) {
  //le indica que este modelo tiene que tener o seguir este eschema
  // iniciamos, le pasamos el schema, una configuracion al cul le pasamos la coneccion al modelo de usuario
  User.init(UserSchema, User.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  // ejecutar las asociaciones
  Customer.associate(sequelize.models);
}

module.exports = setupModels;
