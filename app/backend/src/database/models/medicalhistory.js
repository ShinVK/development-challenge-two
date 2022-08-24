module.exports = (sequelize, DataTypes) => {
  const MedicalHistory = sequelize.define('MedicalHistory', {
    diseaseId: DataTypes.INTEGER,
    medicalId: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'medicalHistories'
  });

  MedicalHistory.associate = (models) => {
    models.MedicalProfile.belongsToMany(models.Disease, {
      foreignKey: 'medicalId',
      otherKey: 'diseaseId',
      as: 'diseases',
      through: MedicalHistory,
    });

    models.Disease.belongsToMany(models.MedicalProfile, {
      foreignKey: 'diseaseId',
      otherKey: 'medicalId',
      as: 'medical',
      through: MedicalHistory,
    });
  };

  return MedicalHistory;
};