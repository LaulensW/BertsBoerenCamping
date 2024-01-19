import React, { useState } from 'react';
import './FAQs.css';


export default function FaqsTotaal() {
    const faqs = [
        { faqtitle: "Is er elektriciteit beschikbaar op de kampeerplaatsen?", faqanswer: "Ja, we bieden elektriciteitsaansluitingen op onze kampeerplaatsen" },
        { faqtitle: "Zijn honden toegestaan op de camping?", faqanswer: "Ja, honden zijn welkom op onze camping, mits ze aangelijnd zijn en rekening wordt gehouden met andere gasten." },
        { faqtitle: "Zijn er sanitaire voorzieningen op de camping?", faqanswer: "Zeker, we hebben goed onderhouden sanitaire voorzieningen met douches, toiletten en wastafels." },
        { faqtitle: "Kunnen we een kampvuur maken op de camping?", faqanswer: "Ja, kampvuren zijn toegestaan op de daarvoor bestemde vuurplaatsen. Zorg ervoor dat u rekening houdt met de geldende veiligheidsvoorschriften." },
        { faqtitle: "Is er drinkwater beschikbaar op de camping?", faqanswer: "Ja, we bieden toegang tot schoon drinkwater op verschillende punten op de camping." },
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <>
            <p3 className="faqs-title-cursive">veelgestelde vragen</p3>
            <h3 className="faqs-title">VEELGESTELDE VRAGEN</h3>

            <div className="faq-totaal">
                {faqs.map((faq, index) => (
                    <div key={index} className={`faq-solo ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleToggle(index)}>
                        <div className="faq-content">
                            <h4 className="faq-title">{faq.faqtitle}</h4>
                            <span className="dropdown-icon">{expandedIndex === index ? '▼' : '▲'}</span>
                        </div>
                        {expandedIndex === index && <p4 className="faq-answer">{faq.faqanswer}</p4>}
                    </div>
                ))}
            </div>
        </>
    );
};