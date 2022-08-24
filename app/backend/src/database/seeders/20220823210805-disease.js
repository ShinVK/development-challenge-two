'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('diseases', [
      {
        id: 1,
        name: 'Obesidade grau 1'
      },
      {
        id: 2,
        name: 'Obesidade grau 2'
      },
      {
        id: 3,
        name: 'Obesidade grau 3'
      },
      {
        id: 4,
        name: 'Hipertensão'
      },
      {
        id: 5,
        name: 'Diabete grau 1'
      },
      {
        id: 6,
        name: 'Diabete grau 2'
      },
      {
        id: 7,
        name: 'Outro'
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('diseases', null, {})
  }
};
