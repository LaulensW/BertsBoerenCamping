module.exports = (sequelize, DataTypes) => {
    const Kampeerplek = sequelize.define("Kampeerplek", {
        locatie: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accomodatietype: {
            type: DataTypes.STRING,
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