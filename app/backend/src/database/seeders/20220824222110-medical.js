'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('medicalProfiles', [
      {
        id: 1,
        weight: 85,
	      height: 168,
	      observations: "Sobrepeso",
	      userId: 1,
	      createdAt: new Date(),
	      updatedAt: new Date(),
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('medicalProfiles', null, {});
  }
};
