module.exports = (sequelize, DataTypes) => {
    const Voorziening = sequelize.define("Voorziening", {
        voorzieningnaam: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        voorzieningprijs: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    });

    Voorziening.associate = (models) => {
        Voorziening.hasMany(models.Boeking, {
        });
    };

    return Voorziening;
    
}