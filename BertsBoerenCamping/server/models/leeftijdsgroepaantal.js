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



    return leeftijdsgroepaantal;
}