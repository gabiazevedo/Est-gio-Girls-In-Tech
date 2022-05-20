module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define("Branch", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    branchName: DataTypes.STRING,
    averageTicket: DataTypes.INTEGER,
    status: DataTypes.STRING,
    addressId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    underscored: true,
    tableName: 'Branches'
  });

  Branch.associate = (models) => {
    Branch.belongsTo(models.Merchant,
      { foreignKey: 'merchantId', as: 'merchant' });

    Branch.belongsTo(models.Address,
      { foreignKey: 'addressId', as: 'address' });
  };
  return Branch;
};