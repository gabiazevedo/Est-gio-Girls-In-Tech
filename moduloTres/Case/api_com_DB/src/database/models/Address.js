module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define("Address", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    streetName: DataTypes.STRING,
    streetNumber: DataTypes.INTEGER,
    neighborhood: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING,
    establishmentId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      field: 'establishment_id',
    },
  },
  {
    underscored: true,
    tableName: 'Addresses',
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Branch,
      { foreignKey: 'establishmentId', as: 'branchEstablishments' });

    Address.belongsTo(models.Merchant,
      { foreignKey: 'establishmentId', as: 'merchantEstablishments' });
  }  
  return Address;
};