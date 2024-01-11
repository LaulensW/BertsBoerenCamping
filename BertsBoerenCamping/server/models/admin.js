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



    Admin.associate = (models) => {
        Admin.hasMany(models.Boeking, { // Een admin heeft toegang tot alle boekingen
        });
    };
    Boeking.associate = (models) => {
        Boeking.belongsTo(models.Admin, {
        });
    };

    Admin.associate = (models) => {
        Admin.hasMany(models.Werknemer, { // Een admin heeft toegang tot alle werknemers
        });
    };
    Werknemer.associate = (models) => {
        Werknemer.belongsTo(models.Admin, {
        });
    };

    return Admin;
    
}