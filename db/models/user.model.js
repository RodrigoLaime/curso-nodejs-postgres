const { Model, DataTypes, Sequelize } = require("sequelize");

const USER_TABLE = 'users';

const UserSchema =  {
  id: {
    allowNull : false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: "customer",
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class User extends Model {
  static associate(){
    //model
  }
  static config(sequelize){
    return{
      // connecion
      sequelize,
      // name de la tabla
      tableName: USER_TABLE,
      // name del modelo, para acceder y poder hacer consultas a esa tabla por medio de sequelize
      modelName: 'User',
      timestamps: false
    }
  }
}

// exportamos la tabla, el schema,y el modelo
module.exports = {USER_TABLE, UserSchema, User} ;
