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
      },
      {
        id: 2,
        firstName: "teste2",
	      lastName: "Testando",
	      email: "teste@email.com",
	      birthDate: "1955-05-30",
	      city: "Ponta Grossa",
	      state: "Paraná",
	      userId: 2,
	      createdAt: new Date(),
	      updatedAt: new Date(),
      },
      {
        id: 3,
        firstName: "teste3",
	      lastName: "Testando2",
	      email: "teste2@email.com",
	      birthDate: "1955-06-01",
	      city: "Curitiba",
	      state: "Paraná",
	      userId: 3,
	      createdAt: new Date(),
	      updatedAt: new Date(),
      }
    ], {})
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('personalData', null, {});
  }
};
