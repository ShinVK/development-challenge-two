module.exports = (sequelize, DataTypes) => {
  const MedicalData = sequelize.define('MedicalData', {
    weight: DataTypes.NUMBER,
    height: DataTypes.NUMBER,
  }, {
    sequelize,
    modelName: 'MedicalData',
  });
  return MedicalData;
};