import React from 'react';
import './Reviews.css';
import ReviewsWave from '../assets/reviews-wave.svg';


export default function Reviews() {
    return (
        <>
           <img src={ReviewsWave}  alt='reviewswave' className='reviewswave'/>
            <h3 className="reviews">REVIEWS</h3>
            <p3 className="reviews-cursive">reviews</p3>
            <div className="reviews-total">
                {renderReview("Geweldige Natuurervaring", "Author", "Ons verblijf op deze camping was fantastisch! De prachtige omgeving bood een geweldige natuurervaring. De kampeerplekken waren ruim en goed onderhouden. De voorzieningen waren schoon, en het personeel was vriendelijk en behulpzaam. We komen zeker terug voor een volgend avontuur!", 'rating-4.png')}
                {renderReview("Perfecte Gezinsvakantie", "Author", "Wat een geweldige plek voor een gezinsvakantie! De kinderen hebben genoten van de speeltuin, en de familieplekken waren perfect voor ons. De sfeer was ontspannen, en we voelden ons echt één met de natuur. Een topcamping voor gezinnen!", 'rating-5.png')}
                {renderReview("Ontspannen Sfeer", "Author", "Deze camping bood precies de ontspannen sfeer die we zochten. Rustige kampeerplekken, een mooi uitzicht op de natuur en geen lawaai van de stad. De avond bij het kampvuur was magisch. Een aanrader voor wie even wil ontsnappen aan de hectiek.", 'rating-5.png')}
                {renderReview("Geweldige Voorzieningen", "Author", "De voorzieningen op deze camping waren geweldig! Van schone douches tot goed onderhouden paden, alles was top. De toevoeging van elektriciteit op de kampeerplekken was een groot pluspunt. We waardeerden de aandacht voor detail en zorg voor de gasten.", 'rating-4.png')}
                {renderReview("Vriendelijk Personeel en Service", "Author", "Het personeel hier verdient een pluim! Ze waren buitengewoon vriendelijk en deden er alles aan om ons verblijf aangenaam te maken. Van hulp bij het opzetten van de tent tot lokale tips, ze waren altijd behulpzaam en glimlachend. Een warm welkom op een prachtige locatie!", 'rating-4.png')}
            </div>
        </>
    );
};

function renderReview (title, author, content, rating) {

    return (
       <div className="reviewcard" key={title}>
            <div className="review-info">
                <h4 className="review-title">{title}</h4>
                <p4 className="review-author">{author}</p4>
                <p3 className="review-content">{content}</p3>
                <img src={`/images/${rating}`} alt="rating" className="review-rating" />
            </div>
       </div>
    );
};

