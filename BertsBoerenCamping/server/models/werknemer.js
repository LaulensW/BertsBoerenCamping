module.exports = (sequelize, DataTypes) => {
    const Werknemer = sequelize.define("Werknemer", {
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
        rol: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        wachtwoord: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    Werknemer.associate = (models) => {
        Werknemer.hasMany(models.Boeking, { // Een werknemer kan meerdere boekingen inzien
        });
    };

    return Werknemer;
    
}