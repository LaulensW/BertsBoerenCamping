import React from 'react';
import './IndividueleFAQ.css';

export default function IndividueleFAQ(props) {
    return(
        <div className="faq-solo">
            <h4 className="faq-title">{props.faqtitle}</h4>
            <p4 className="faq-answer">{props.faqanswer}</p4>
        </div>
    );
};
