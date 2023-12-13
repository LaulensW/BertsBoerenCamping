import React from 'react';
import './FAQs.css';
import Faq from './IndividueleFAQ.jsx'

export default function FaqsTotaal() {
    return(
    <>
        <p3 className="faqs-title-cursive">veelgestelde vragen</p3>
        <h3 className="faqs-title">VEELGESTELDE VRAGEN</h3>
        
        <div className="faq-totaal">  
        <Faq 
            faqtitle="FAQ 01"
            faqanswer="Lorem ipsum"
        />
        <Faq 
            faqtitle="FAQ 02"
            faqanswer="Lorem ipsum"
        />
        <Faq 
            faqtitle="FAQ 03"
            faqanswer="Lorem ipsum"
        />
       </div>
    </>
    );
};