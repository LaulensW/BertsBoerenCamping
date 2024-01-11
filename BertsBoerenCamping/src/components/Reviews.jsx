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
                {renderReview("Review Title 1", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", 'rating-4.png')}
                {renderReview("Review Title 2", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", 'rating-5.png')}
                {renderReview("Review Title 3", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", 'rating-3.png')}
                {renderReview("Review Title 4", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", 'rating-4.png')}
                {renderReview("Review Title 5", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", 'rating-2.png')}
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

