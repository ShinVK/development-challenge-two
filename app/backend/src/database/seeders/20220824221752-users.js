'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        login: 'admin',
        password: 'de002edac8774eefb57b6ef95197e1fa',
        access: 'administrator',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        login: 'doutor1',
        password: 'f8f827a46e608b5cdf6bb34ada633332',
        access: 'medcloud',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        login: 'cliente1',
        password: '17033c0e24e4f403a96849b227ba874b',
        access: 'customer',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
