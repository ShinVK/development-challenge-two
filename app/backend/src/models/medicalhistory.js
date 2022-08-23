module.exports = (sequelize, DataTypes) => {
  const MedicalHistory = sequelize.define('MedicalHistory', {
    diseaseId: DataTypes.INTEGER,
    medicalId: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  MedicalHistory.associate = (models) => {
    models.MedicalData.belongsToMany(models.Disease, {
      foreignKey: 'medicalId',
      otherKey: 'diseaseId',
      as: 'diseases',
      through: MedicalHistory,
    });

    models.Disease.belongsToMany(models.MedicalData, {
      foreignKey: 'diseaseId',
      otherKey: 'medicalId',
      as: 'medical',
      through: MedicalHistory,
    });
  };

  return MedicalHistory;
};