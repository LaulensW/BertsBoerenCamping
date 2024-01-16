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

    Boeking.associate = (models) => {
        Boeking.hasMany(models.LeeftijdsgroepAantal, {
            onDelete: "cascade", // Wanneer een boeking wordt verwijderd, wordt ook het LeeftijdsgroepAantal van die boeking verwijderd
        });
        Boeking.belongsTo(models.Kampeerplek, { foreignKey: 'KampeerplekId' });
        Boeking.belongsTo(models.Gast, { foreignKey: 'GastId' });
        Boeking.belongsTo(models.Werknemer, { foreignKey: 'WerknemerId' });
    };

    return Boeking;
    
}