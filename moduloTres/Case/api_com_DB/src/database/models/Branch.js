module.exports = (sequelize, DataTypes) => {
  const Branch = sequelize.define("Branch", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    branchName: DataTypes.STRING,
    averageTicket: DataTypes.INTEGER,
    status: DataTypes.STRING,
    openingTime: DataTypes.STRING,
    closingTime: DataTypes.STRING,
    merchantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'merchant_id',
      references: {
        model: 'Merchants',
        key: 'id'
      }
    },
  },
  {
    underscored: true,
    tableName: 'Branches'
  });

  Branch.associate = (models) => {
    Branch.belongsTo(models.Merchant,
      { foreignKey: 'merchantId', as: 'merchant' });

    Branch.hasOne(models.Address,
      { foreignKey: 'establishmentId', as: 'establishments' });
  };

  return Branch;
};