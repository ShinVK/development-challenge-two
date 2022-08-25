module.exports = (sequelize, dataTypes) => {
  const User = sequelize.define('User', {
    login: dataTypes.STRING,
    password: dataTypes.STRING,
    access: dataTypes.STRING,
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users'
  });

  return User;
};
