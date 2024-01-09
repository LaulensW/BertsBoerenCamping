module.exports = (sequelize, DataTypes) => {
    const leeftijdsgroepaantal = sequelize.define("leeftijdsgroepaantal", {
        aantalkinderen: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        aantaltieners: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        aantalvolwassenen: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    leeftijdsgroepaantal.associate = (models) => {
        leeftijdsgroepaantal.belongsTo(models.boeking, {
        });
    };

    leeftijdsgroepaantal.associate = (models) => {
        leeftijdsgroepaantal.belongsTo(models.boeking, {
        });
    };

    return leeftijdsgroepaantal;
}