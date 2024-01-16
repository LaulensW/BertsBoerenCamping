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

    // vaste waaren voor kampeerplekken
    async function toevoegenKampeerplekken() {
        try {
            await Kampeerplek.findOrCreate({
                where: { locatie: "A", accomodatietype: "Tent", kampeerplekprijs: 10 },
                defaults: { locatie: "A", accomodatietype: "Tent", kampeerplekprijs: 10 }
            });
            await Kampeerplek.findOrCreate({
                where: { locatie: "B", accomodatietype: "Tent", kampeerplekprijs: 10 },
                defaults: { locatie: "B", accomodatietype: "Tent", kampeerplekprijs: 10 }
            });
            await Kampeerplek.findOrCreate({
                where: { locatie: "C", accomodatietype: "Tent", kampeerplekprijs: 10 },
                defaults: { locatie: "C", accomodatietype: "Tent", kampeerplekprijs: 10 }
            });
            await Kampeerplek.findOrCreate({
                where: { locatie: "D", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
                defaults: { locatie: "D", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 }
            });
            await Kampeerplek.findOrCreate({
                where: { locatie: "E", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
                defaults: { locatie: "E", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 }
            });
            await Kampeerplek.findOrCreate({
                where: { locatie: "F", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
                defaults: { locatie: "F", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
            });
            await Kampeerplek.findOrCreate({
                where: { locatie: "G", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 },
                defaults: { locatie: "G", accomodatietype: "Kamper of Caravan", kampeerplekprijs: 20 }
            });

            console.log('standaardwaarden kampeerplekken zijn toegevoegd')
        } catch (error) {
            console.error('Fout bij het toevoegen standaardwaarden kampeerplekken')
        }
    }

    // Een kampeerplek hoort bij een boeking
    Kampeerplek.associate = (models) => {
        Kampeerplek.hasMany(models.Boeking);
    };

    toevoegenKampeerplekken();

    return Kampeerplek;
    
}