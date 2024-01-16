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
            type: DataTypes.DECIMAL(6, 2),
            allowNull: true,
        },
        voorkeuren: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    });

    // Een boeking kan meerdere leeftijdsgroepaantallen hebben
    Boeking.associate = (models) => {
        Boeking.hasMany(models.LeeftijdsgroepAantal, {
            onDelete: "cascade", // Wanneer een boeking wordt verwijderd, wordt ook het LeeftijdsgroepAantal van die boeking verwijderd
        });
    };

    // Een boeking kan je koppelen aan een bestaande kampeerplek
    Boeking.associate = (models) => {
        Boeking.belongsTo(models.Kampeerplek, { foreignKey: 'KampeerplekId' });
    };

    // Een boeking zit aan een gast gekoppeld
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