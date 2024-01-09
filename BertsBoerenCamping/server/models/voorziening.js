module.exports = (sequelize, DataTypes) => {
    const voorziening = sequelize.define("voorziening", {
        voorzieningnaam: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        voorzieningprijs: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    });

    voorziening.associate = (models) => {
        voorziening.hasMany(models.boeking, {
        });
    };

    return voorziening;
    
}