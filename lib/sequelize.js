const { Sequelize } = require("sequelize");
// env
const {config} = require('../config/config');
// db
const setupModels = require('../db/models/index');

// connecion
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// crear instancia
const sequelize = new Sequelize(URI, {
  // indica que base  de datos se va a usar
  dialect: 'postgres',
  logging: true
});
//le pasamos la connecion para configurar los modelos
setupModels(sequelize);

// sincroniza con la structura en el userSchema y crea la tabla
// sequelize.sync();

module.exports = sequelize;
