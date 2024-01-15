module.exports = (sequelize, DataTypes) => {
    const Kampeerplek = sequelize.define("Kampeerplek", {
        locatie: {
            type: DataTypes.STRING(45),
            allowNull: false,
        },
        accomodatietype: {
            type: DataTypes.STRING(45),
            allowNull: true,
        },
        kampeerplekprijs: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        }
    });

    // Een kampeerplek hoort bij een boeking
    Kampeerplek.associate = (models) => {
        Kampeerplek.belongsTo(models.Boeking, {
        });
    };

    return Kampeerplek;
    
}