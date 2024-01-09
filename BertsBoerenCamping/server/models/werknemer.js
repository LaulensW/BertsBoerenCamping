module.exports = (sequelize, DataTypes) => {
    const werknemer = sequelize.define("werknemer", {
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

    werknemer.associate = (models) => {
        werknemer.hasMany(models.boeking, { // Een werknemer kan meerdere boekingen inzien
        });
    };

    return werknemer;
    
}