module.exports = (sequelize, DataTypes) => {
    const Leeftijdsgroep = sequelize.define("Leeftijdsgroep", {
        leeftijdsgroepprijs: {
            type: DataTypes.DECIMAL(6, 2),
            allowNull: false,
        },
        beschrijving: {
            type: DataTypes.STRING(15),
            allowNull: false,
        }
    });    

    // Een leeftijdsgroep kan meerdere leeftijdsgroepaantallen (aantal personen per leeftijdsgroep) hebben
    Leeftijdsgroep.associate = (models) => {
        Leeftijdsgroep.hasMany(models.LeeftijdsgroepAantal);
    };

    // vaste waarden voor leeftijdsgroepen
    async function toevoegenLeeftijdsgroep() {
        try {
            // standaardwaarde kinderen
            await Leeftijdsgroep.findOrCreate({
                where: { leeftijdsgroepprijs: 15, beschrijving: 'kinderen' }, 
                defaults: { leeftijdsgroepprijs: 15, beschrijving: 'kinderen' },
            });
            // standaardwaarde tieners
            await Leeftijdsgroep.findOrCreate({
                where: { leeftijdsgroepprijs: 25, beschrijving: 'tieners' }, 
                defaults: { leeftijdsgroepprijs: 25, beschrijving: 'tieners' },
            });
            // standaardwaarde volwassenen
            await Leeftijdsgroep.findOrCreate({
                where: { leeftijdsgroepprijs: 35, beschrijving: 'volwassenen' }, 
                defaults: { leeftijdsgroepprijs: 35, beschrijving: 'volwassenen' },
            });

            console.log('standaardwaarden leeftijdsgroepprijs zijn toegevoegd.');
        } catch (error) {
                console.error('Fout bij het toevoegen standaardwaarden leeftijdsgroepprijs', error);
            }
    }

    toevoegenLeeftijdsgroep();

    return Leeftijdsgroep;

    module.exports.toevoegenLeeftijdsgroep = this.toevoegenLeeftijdsgroep;
};

