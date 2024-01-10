const LeeftijdsGroepAantal = require("./LeeftijdsgroepAantal");
const Voorziening = require("./Voorziening");

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
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    Boeking.associate = (models) => {
        Boeking.hasMany(models.Kampeerplek, { // Een boeking kan meerdere kampeerplekken hebben
            onDelete: "cascade", // Wanneer een boeking wordt verwijderd, worden ook de kampeerplekken van die boeking verwijderd
        });
    };

    Boeking.associate = (models) => {
        Boeking.hasMany(models.LeeftijdsgroepAantal, { // Een boeking kan meerdere leeftijdsgroepaantallen hebben
        });
    };

    Boeking.associate = (models => {
        Boeking.hasMany(models.Voorziening, { // Een boeking kan meerdere voorzieningen hebben
            onDelete: "cascade", // (Nog niet zeker of dit moet)
        })
    })

    Boeking.associate = (models) => {
        Boeking.belongsTo(models.Werknemer, {
        });
    };

    

    return Boeking;
    
}