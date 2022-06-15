module.exports = (sequelize, DataTypes) => {
  const Merchant = sequelize.define("Merchant", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    merchantName: DataTypes.STRING,
    averageTicket: DataTypes.INTEGER,
    status: DataTypes.STRING,
    openingTime: DataTypes.STRING,
    closingTime: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Merchants'
  });

  Merchant.associate = (models) => {
    Merchant.hasMany(models.Branch,
      { foreignKey: 'merchantId', as: 'merchant' });

    Merchant.hasOne(models.Address,
      { foreignKey: 'establishmentId', as: 'establishments' });
  };  
  return Merchant;
};
