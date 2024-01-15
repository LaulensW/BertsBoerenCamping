const LeeftijdsGroepAantal = require("./LeeftijdsgroepAantal");

module.exports = (sequelize, DataTypes) => {
    const Boeking = sequelize.define("Boeking", {
        aankomst: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        vertrek: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        boekingprijs: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: true,
        },
        voorkeur: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    });

    // Een boeking kan meerdere kampeerplekken hebben
    Boeking.associate = (models) => {
        Boeking.hasMany(models.Kampeerplek, { 
            onDelete: "cascade", // Wanneer een boeking wordt verwijderd, worden ook de kampeerplekken van die boeking verwijderd
        });
    };

    // Een boeking kan meerdere leeftijdsgroepaantallen hebben
    Boeking.associate = (models) => {
        Boeking.hasMany(models.LeeftijdsgroepAantal, {
        });
    };

    Boeking.associate = (models) => {
        Boeking.belongsTo(models.Gast, {
        });
    };

    // Een boeking kan bekeken worden door een werknemer
    Boeking.associate = (models) => {
        Boeking.belongsTo(models.Werknemer, {
        });
    };

    return Boeking;
    
}