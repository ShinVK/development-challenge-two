module.exports = (sequelize, DataTypes) => {
  const MedicalData = sequelize.define('MedicalProfile', {
    weight: DataTypes.NUMBER,
    height: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'MedicalProfile',
    tableName: 'medicalProfiles'
  });
  
  MedicalData.associate = (models) => {
    MedicalData.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return MedicalData;
};