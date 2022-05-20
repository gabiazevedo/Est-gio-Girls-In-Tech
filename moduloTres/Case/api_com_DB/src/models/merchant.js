module.exports = (sequelize, DataTypes) => {
  const Merchant = sequelize.define("Merchant", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    merchantName: DataTypes.STRING,
    averageTicket: DataTypes.INTEGER,
    status: DataTypes.STRING,
    addressId: { type: DataTypes.INTEGER, foreignKey: true },
  },
  {
    underscored: true,
    tableName: 'Merchants'
  });

  Merchant.associate = (models) => {
    Merchant.hasMany(models.Branch,
      { foreignKey: 'merchantId', as: 'merchant' });

    Merchant.belongsTo(models.Address,
      { foreignKey: 'addressId', as: 'address' });
  };
  
  return Merchant;
};
