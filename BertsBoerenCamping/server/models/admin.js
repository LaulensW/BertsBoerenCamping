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

    return admin;
    
}