module.exports = (sequelize, DataTypes) => {
    const Leeftijdsgroep = sequelize.define("Leeftijdsgroep", {
        leeftijdsgroepprijs: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        beschrijving: {
            type: DataTypes.STRING(10),
            allowNull: false,
        }
    });    

    // Een leeftijdsgroep kan meerdere leeftijdsgroepaantallen (aantal personen per leeftijdsgroep) hebben
    Leeftijdsgroep.associate = (models) => {
        Leeftijdsgroep.hasMany(models.LeeftijdsgroepAantal, {
        });
    };

    return Leeftijdsgroep;
    
}