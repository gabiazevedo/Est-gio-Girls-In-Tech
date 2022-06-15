'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert("Branches",
    [
      {
        branch_name: 'Outback Jundiaí',
        average_ticket: 2199000.58,
        status: 'open',
        merchant_id: 1,
        openingTime: '11h',
        closingTime: '00h',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete("Branches", null, {}),
};




'use strict';

const { v4: uuidv4 } = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert("Branches",
    [
      {
        branch_name: 'Outback Jundiaí',
        average_ticket: 2199000.58,
        status: 'open',
        merchant_id: 1,
        opening_time: '11h',
        closing_time: '00h',
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete("Branches", null, {}),
};