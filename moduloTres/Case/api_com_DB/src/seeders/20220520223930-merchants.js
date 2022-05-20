'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert("Merchants",
    [
      {
        merchant_name: 'Outback SteakHouse',
        average_ticket: 3105980.19,
        status: 'open',
        address_id: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete("Merchants", null, {}),
};
