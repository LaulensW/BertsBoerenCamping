const boeking = require("./boeking");
const werknemer = require("./werknemer");

module.exports = (sequelize, DataTypes) => {
    const admin = sequelize.define("admin", {
        gebruikersnaam: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        wachtwoord: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });

    admin.associate = (models) => {
        admin.hasMany(models.boeking, { // Een admin heeft toegang tot alle boekingen
        });
    };
    boeking.associate = (models) => {
        boeking.belongsTo(models.admin, {
        });
    };

    admin.associate = (models) => {
        admin.hasMany(models.werknemer, { // Een admin heeft toegang tot alle werknemers
        });
    };
    werknemer.associate = (models) => {
        werknemer.belongsTo(models.admin, {
        });
    };

    return admin;
    
}