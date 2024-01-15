import React from 'react';
import './AboutBanner.css';
import Wave from '../assets/about-banner-wave.svg';

const Banner = () => {
    return(  
        <>
        <div className="banner">
            <h className="banner-title">OVER ONS</h>
            <p className="banner-title-cursive">over ons</p>
            <img src={Wave} alt="Wave" className="banner-wave"/>
            <img src="../images/Banner_Background.png" alt="Banner" className="banner-background"/>
        </div>
        <div className="wie-zijn-wij">
            <img src="../images/Filler.png" className="wie-zijn-wij-photo"/>
            <h className="wie-zijn-wij-title">WIE ZIJN WIJ</h>
            <p3 className="wie-zijn-wij-title-cursive">wie zijn wij</p3>
            <p3 className="wie-zijn-wij-tekst">BertsBoerenCamping is een boerencamping opgericht in 2023 door Bert … , ook wel Boer Bert genoemd. Als eerst opgericht als een boerderij, bij “BertsBoerenCamping” is ons doel om een unieke en gastvrije ervaring te creëren voor onze kampeerders. Welkom op onze boerencamping, waar duurzaamheid, innovatie, plezier samenkomen voor een onvergetelijke ervaring.</p3>
            <p3 className="wie-zijn-wij-tekst">Wij geloven in de harmonie tussen natuur en de mens. Wij streven daarom naar een duurzame omgeving waar gasten niet alleen kunnen genieten van het buitenleven, maar ook kunnen bijdragen aan het behoud van de natuur. van milieuvriendelijke voorzieningen tot educatieve initiatieven, wij streven voor een groene toekomst.</p3>

            <p3 className="wie-zijn-wij-tekst">Als boerderij die de overstap maakt naar een boerencamping, proberen wij vernieuwing zo veel mogelijk te gebruiken. We integreren technologie om het verblijf voor onze gasten te verbeteren. Van intuïtieve boekingssystemen tot slimme oplossingen voor het monitoren van faciliteiten.</p3>

            <p3 className="wie-zijn-wij-tekst">Wij streven ernaar om een sfeer te creëren waarin lachen, ontspannen, nieuwe avonturen en plezier hebben centraal staan. Het maakt niet uit of dit gaat om georganiseerde activiteiten, gezellige kampvuren of gewoon genieten van de natuur en rust. Wij willen dat elk moment plezierig is.</p3>
        </div>
        </>
    );
};

export default Banner;