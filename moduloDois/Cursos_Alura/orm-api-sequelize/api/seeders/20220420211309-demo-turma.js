'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
		await queryInterface.bulkInsert('Turmas', [{
			data_inicio: "2020-02-01",
			docente_id: 6,
			nivel_id: 1,
			createdAt: new Date(),
			updatedAt: new Date()				 
		},
		{
			data_inicio: "2020-02-01",
			docente_id: 5,
			nivel_id: 2,
			createdAt: new Date(),
			updatedAt: new Date()			
		},
		{
			data_inicio: "2020-02-01",
			docente_id: 6,
			nivel_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()			
			},
		{
			data_inicio: "2020-07-01",
			docente_id: 6,
			nivel_id: 3,
			createdAt: new Date(),
			updatedAt: new Date()			
		}], {})
  },

  async down (queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Turmas', null, {})
  }
}
