'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('personalData', [
      {
        id: 1,
        firstName: "Shin",
	      lastName: "Kamiguchi",
	      email: "joaozinho@gmail.com",
	      birthDate: "1994-04-30",
	      city: "Londrina",
	      state: "Paraná",
	      userId: 1,
	      createdAt: new Date(),
	      updatedAt: new Date(),
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('personalData', null, {});
  }
};
