'use strict';

const { DataTypes } = require('sequelize');

const {CUSTOMER_TABLE} = require("../models/customer.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    // modifica la una columna de una tabla
    // indicar que tabla queremos y cual es la columna que se va a modificar y enviar los ajustes
    await queryInterface.changeColumn(CUSTOMER_TABLE, 'user_ud', {
      field: 'user_id',
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    });
  },

  async down (queryInterface) {
    // await queryInterface.dropTable(CUSTOMER_TABLE);
  }
};
