module.exports = (sequelize, DataTypes) => {
    const Leeftijdsgroep = sequelize.define("Leeftijdsgroep", {
        leeftijdsgroepprijs: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        beschrijving: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });    

    Leeftijdsgroep.associate = (models) => {
        Leeftijdsgroep.hasMany(models.LeeftijdsgroepAantal, { // Een leeftijdsgroep kan meerdere leeftijdsgroepaantallen hebben
        });
    };

    return Leeftijdsgroep;
    
}