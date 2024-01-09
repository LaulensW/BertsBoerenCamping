module.exports = (sequelize, DataTypes) => {
    const kampeerplek = sequelize.define("kampeerplek", {
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

    kampeerplek.associate = (models) => {
        kampeerplek.belongsTo(models.boeking, {
        });
    };

    return kampeerplek;
    
}