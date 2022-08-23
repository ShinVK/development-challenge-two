module.exports = (sequelize, DataTypes) => {
  const MedicalData = sequelize.define('MedicalProfile', {
    weight: DataTypes.NUMBER,
    height: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'MedicalProfile',
  });
  return MedicalData;
};