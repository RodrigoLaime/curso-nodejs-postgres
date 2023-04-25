const boom = require('@hapi/boom');

const pool = require('../lib/postgres.pool');

const {models} = require('../lib/sequelize');

class UserService {
  constructor() {
    this.users = [];
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
   }

  async create(data) {
    const newUser = await models.User.create(data);
    return newUser;
  }

  async find() {
    // trae todos los datos de la tabla Users
    const rta = await models.User.findAll();
    return rta;
  }

  async findOne(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not found')
    }
    return user;
  }

  async update(id, changes) {
    // buscar por el id
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not found')
    }
    // si todo va bien se actualiza
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if(!user){
      throw boom.notFound('User not found')
    }
    // elimina
    await user.destroy();
    return { id };
  }
}

module.exports = UserService;
