'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.bulkInsert("Addresses",
    [
      {
        street_name: 'Avenida do Estado',
        street_number: 121,
        neighborhood: 'Barra da Tijuca',
        city: 'Rio de Janeiro',
        state: 'RJ',
        postal_code: '98680-149',
        latitude: '-97423',
        longitude: '-5416788',
        establishment_id: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      {
        street_name: 'Rua Pedro',
        street_number: 32,
        neighborhood: '',
        city: 'Jundiaí',
        state: 'SP',
        postal_code: '98089-589',
        latitude: '21414',
        longitude: '9342',
        establishment_id: 1,
        created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
        updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
      },
    ], {}),

  down: async (queryInterface) => queryInterface.bulkDelete("Addresses", null, {}),
};
