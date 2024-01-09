module.exports = (sequelize, DataTypes) => {
    const gast = sequelize.define("gast", {
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

    gast.associate = (models) => {
        gast.hasMany(models.boeking, { // Een gast kan meerdere boekingen hebben
            onDelete: "cascade", // Wanneer een gast wordt verwijderd, worden ook de boekingen van die gast verwijderd
        });
    };

    return gast;

}