module.exports = (sequelize, DataTypes) => {
    const LeeftijdsgroepAantal = sequelize.define("LeeftijdsgroepAantal", {
        aantalKinderen: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        aantalTieners: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        aantalVolwassenen: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        }
    });

    LeeftijdsgroepAantal.associate = (models) => {
        LeeftijdsgroepAantal.belongsTo(models.Boeking, { foreignKey: 'BoekingId' });
        LeeftijdsgroepAantal.belongsTo(models.Leeftijdsgroep, { foreignKey: 'LeeftijdsgroepId' });
    };

    return LeeftijdsgroepAantal;
}
