'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert("Branches",
    [
      {
        branch_name: 'Outback Jundiaí',
        average_ticket: 2199000.58,
        status: 'open',
        merchant_id: 1,
        address_id: 2,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete("Branches", null, {}),
};