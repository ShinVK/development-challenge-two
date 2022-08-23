module.exports = (sequelize, DataTypes) => {
  const Disease = sequelize.define('Disease', {
    name: DataTypes.STRING,
  });
  
  return Disease;
};