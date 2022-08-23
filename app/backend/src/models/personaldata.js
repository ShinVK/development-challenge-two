module.exports = (sequelize, DataTypes) => {
  const PersonalData = sequelize.define('PersonalData', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'PersonalData',
  });

  PersonalData.associate = (models) => {
    PersonalData.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };
  return PersonalData;
};