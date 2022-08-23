'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalData extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MedicalData.init({
    weight: DataTypes.NUMBER,
    height: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'MedicalData',
  });
  return MedicalData;
};