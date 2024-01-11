const Boeking = require("./Boeking");
const Werknemer = require("./Werknemer");

module.exports = (sequelize, DataTypes) => {
    const Admin = sequelize.define("admin", {
        gebruikersnaam: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        wachtwoord: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });


    // Een admin heeft toegang tot alle boekingen
    Admin.associate = (models) => {
        Admin.hasMany(models.Boeking, { 
        });
    };
    Boeking.associate = (models) => {
        Boeking.belongsTo(models.Admin, {
        });
    };

    // Een admin heeft toegang tot alle werknemers
    Admin.associate = (models) => {
        Admin.hasMany(models.Werknemer, { 
        });
    };
    Werknemer.associate = (models) => {
        Werknemer.belongsTo(models.Admin, {
        });
    };

    return Admin;
    
}