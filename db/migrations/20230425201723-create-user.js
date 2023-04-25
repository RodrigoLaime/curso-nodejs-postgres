'use strict';

const {UserSchema, USER_TABLE} = require("../models/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // creacion
  async up (queryInterface) {
    // le indica que tabla quiere crear y el eschema para esa tabla
    await queryInterface.createTable(USER_TABLE, UserSchema);

  },

  // opcion para revertir cambios elminar
  async down (queryInterface) {
    await queryInterface.dropAllSchemas(USER_TABLE);
  }
};
