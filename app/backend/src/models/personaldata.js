module.exports = (sequelize, DataTypes) => {
  const PersonalData = sequelize.define('PersonalData', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'PersonalData',
  });
  return PersonalData;
};