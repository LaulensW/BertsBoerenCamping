module.exports = (sequelize, DataTypes) => {
    const LeeftijdsgroepAantal = sequelize.define("LeeftijdsgroepAantal", {
        aantalKinderen: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        aantalTieners: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        aantalVolwassenen: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    LeeftijdsgroepAantal.associate = (models) => {
        LeeftijdsgroepAantal.belongsTo(models.Boeking, {
        });
    };

    LeeftijdsgroepAantal.associate = (models) => {
        LeeftijdsgroepAantal.belongsTo(models.Boeking, {
        });
    };

    return LeeftijdsgroepAantal;
}