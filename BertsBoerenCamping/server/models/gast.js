const Boeking = require("./Boeking");

module.exports = (sequelize, DataTypes) => {
    const Gast = sequelize.define("Gast", {
        voornaam: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tussenvoegsel: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        achternaam: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefoonnummer: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Gast.associate = (models) => {
        Gast.hasMany(models.Boeking, { // Een gast kan meerdere boekingen hebben
            onDelete: "cascade", // Wanneer een gast wordt verwijderd, worden ook de boekingen van die gast verwijderd
        });
    };
    Boeking.associate = (models) => {
        Boeking.belongsTo(models.Gast, {
        });
    };

    return Gast;

}