module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    streetName: DataTypes.STRING,
    streetNumber: DataTypes.INTEGER,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
  },
  {
    underscored: true,
    tableName: 'Addresses'
  });

  Address.associate = (models) => {
    Address.hasOne(models.Merchant,
      { foreignKey: 'addressId', as: 'address'});

    Address.hasOne(models.Branch,
      { foreignKey: 'addressId', as: 'address' });
  };
  return Address;
};
