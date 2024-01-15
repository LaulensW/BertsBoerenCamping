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

    // Het LeeftijdsgroepAantal (aantal personen per leeftijdsgroep) hoort bij een boeking
    LeeftijdsgroepAantal.associate = (models) => {
        LeeftijdsgroepAantal.belongsTo(models.Boeking, {
        });
    };

    return LeeftijdsgroepAantal;
}