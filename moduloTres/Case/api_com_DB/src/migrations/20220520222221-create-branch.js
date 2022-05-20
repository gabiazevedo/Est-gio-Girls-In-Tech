module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Branches', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      branchName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'branch_name',
      },
      averageTicket: {
        type: Sequelize.DOUBLE,
        field: 'average_ticket',
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      merchantId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'merchant_id',
        references: {
          model: 'Merchants',
          key: 'id'
        }
      },
      addressId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        field: 'address_id',
        references: {
          model: 'Addresses',
          key: 'id',
        }
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
    await queryInterface.dropTable('Branches');
  }
};