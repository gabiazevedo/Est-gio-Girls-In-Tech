module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Merchants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      merchantName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'merchant_name',
      },
      averageTicket: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        field: 'average_ticket',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      openingTime: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'opening_time',
      },
      closingTime: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'closing_time',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Merchants');
  }
};