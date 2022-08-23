module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    access: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
