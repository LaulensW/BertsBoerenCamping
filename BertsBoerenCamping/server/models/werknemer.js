module.exports = (sequelize, DataTypes) => {
    const Werknemer = sequelize.define("Werknemer", {
        voornaam: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        tussenvoegsel: {
            type: DataTypes.STRING(10),
            allowNull: true,
        },
        achternaam: {
            type: DataTypes.STRING(25),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        rol: {
            type: DataTypes.INTEGER(10),
            allowNull: false,
        },
        wachtwoord: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    });

    Werknemer.associate = (models) => {
        Werknemer.hasMany(models.Boeking);
    };

    return Werknemer;
    
}