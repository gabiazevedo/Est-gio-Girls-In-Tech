'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert("Merchants",
    [
      {
        merchant_name: 'Outback SteakHouse',
        average_ticket: 3105980.19,
        status: 'open',
        opening_time: '11h',
        closing_time: '00h',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete("Merchants", null, {}),
};

