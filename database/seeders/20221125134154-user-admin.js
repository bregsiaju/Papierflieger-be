'use strict';

const User = require('../../app/models/users');
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //  * Add seed commands here.
    //  *
    //  * Example:
    await queryInterface.bulkInsert('Users', [{
      email: 'suhaeriheri45@gmail.com',
      password: bcrypt.hashSync('tim3hore', 10),
      username: 'haeri2610',
      fullName: 'Suhaeri',
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    //  Add commands to revert seed here.

    //  Example:
    await queryInterface.bulkDelete('User', null, {});
  }
};
