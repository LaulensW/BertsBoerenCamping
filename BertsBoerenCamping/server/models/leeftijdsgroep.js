module.exports = (sequelize, DataTypes) => {
    const leeftijdsgroep = sequelize.define("leeftijdsgroep", {
        leeftijdsgroepprijs: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        beschrijving: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });    

    leeftijdsgroep.associate = (models) => {
        leeftijdsgroep.hasMany(models.leeftijdsgroepaantal, { // Een leeftijdsgroep kan meerdere leeftijdsgroepaantallen hebben
        });
    };

    return leeftijdsgroep;
    
}