module.exports = (sequelize, DataTypes) => {
    const Gast = sequelize.define("Gast", {
        voornaam: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        tussenvoegsel: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        achternaam: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        telefoonnummer: {
            type: DataTypes.STRING(15),
            allowNull: false,
        }
    });

    // Een gast kan meerdere boekingen hebben
    Gast.associate = (models) => {
        Gast.hasMany(models.Boeking, { 
            onDelete: "cascade", // Wanneer een gast wordt verwijderd, worden ook de boekingen van die gast verwijderd
        });
    };

    return Gast;

}