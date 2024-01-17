module.exports = (sequelize, DataTypes) => {
    const Kampeerplek = sequelize.define("Kampeerplek", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },
        locatie: {
            type: DataTypes.STRING(45),
            allowNull: false,
            unique: true,
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
        Kampeerplek.hasMany(models.Boeking);
    };

    // vaste waaren voor kampeerplekken
    async function toevoegenKampeerplekken() {
        try {
            await Kampeerplek.findOrCreate({
                where: { id: 1, locatie: "A", accomodatietype: "Tent", kampeerplekprijs: 10 },
                defaults: { id: 1, locatie: "A", accomodatietype: "Tent", kampeerplekprijs: 10 }
            });
            await Kampeerplek.findOrCreate({
                where: { id: 2,  locatie: "B", accomodatietype: "Tent", kampeerplekprijs: 10 },
                defaults: { id: 2, locatie: "B", accomodatietype: "Tent", kampeerplekprijs: 10 }
            });
            await Kampeerplek.findOrCreate({
                where: { id: 3, locatie: "C", accomodatietype: "Tent", kampeerplekprijs: 10 },
                defaults: { id: 3, locatie: "C", accomodatietype: "Tent", kampeerplekprijs: 10 }
            });
            await Kampeerplek.findOrCreate({
                where: { id: 4, locatie: "D", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
                defaults: { id: 4, locatie: "D", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 }
            });
            await Kampeerplek.findOrCreate({
                where: { id: 5, locatie: "E", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
                defaults: { id: 5, locatie: "E", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 }
            });
            await Kampeerplek.findOrCreate({
                where: { id: 6, locatie: "F", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
                defaults: { id: 6, locatie: "F", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
            });
            await Kampeerplek.findOrCreate({
                where: { id: 7, locatie: "G", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
                defaults: { id: 7, locatie: "G", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 }
            });

            console.log('standaardwaarden kampeerplekken zijn toegevoegd')
        } catch (error) {
            console.error('Fout bij het toevoegen standaardwaarden kampeerplekken')
        }
    }

    toevoegenKampeerplekken();

    return Kampeerplek;   

    module.exports.toevoegenKampeerplekken = toevoegenKampeerplekken;
};