'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PersonalData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  PersonalData.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    city: DataTypes.STRING,
    state: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'PersonalData',
  });
  return PersonalData;
};