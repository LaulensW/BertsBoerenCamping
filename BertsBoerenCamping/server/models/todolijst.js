module.exports = (sequelize, DataTypes) => {
    const TodoLijst = sequelize.define("TodoLijst", {
        beschrijving: {
            type: DataTypes.STRING(100),
            allowNull: false,
        }
    });

    return TodoLijst;
    
};
