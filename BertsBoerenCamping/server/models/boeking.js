module.exports = (sequelize, DataTypes) => {
    const boeking = sequelize.define("boeking", {
        aankomst: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        vertrek: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        boekingsprijs: {
            type: DataTypes.DECIMAL(4, 2),
            allowNull: false,
        },
        voorkeur: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    });

    boeking.associate = (models) => {
        boeking.hasMany(models.kampeerplek, { // Een boeking kan meerdere kampeerplekken hebben
            onDelete: "cascade", // Wanneer een boeking wordt verwijderd, worden ook de kampeerplekken van die boeking verwijderd
        });
    };

    boeking.associate = (models) => {
        boeking.hasMany(models.leeftijdsgroepaantal, { // Een boeking kan meerdere leeftijdsgroepaantallen hebben
        });
    };

    return boeking;
    
}