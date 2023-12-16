import React from 'react';
import './Reviews.css';

export default function Reviews() {
    return (
        <>
            <h3 className="reviews">REVIEWS</h3>
            <p3 className="reviews-cursive">reviews</p3>
            <div className="reviews-total">
                {renderReview("Review Title", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.")}
                {renderReview("Review Title", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", "5")}
                {renderReview("Review Title", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", "5")}
                {renderReview("Review Title", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", "5")}
                {renderReview("Review Title", "Author", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc metus libero, dignissim et arcu id, consequat rutrum leo. Morbi pretium nec lorem vel porta. Aenean finibus faucibus commodo. Vivamus quis justo neque. Sed et pulvinar magna. Duis nec laoreet purus. Vivamus tempus leo vitae sem vestibulum volutpat.", "5")}
            </div>
        </>
    );
};

function renderReview(title, author, content, rating) {
    return (
       <div className="reviewcard" key={title}>
            <div className="review-info">
                <h4 className="review-title">{title}</h4>
                <p4 className="review-author">{author}</p4>
                <p3 className="review-content">{content}</p3>
                <h3 className="review-rating">{rating}
                <img src="../images/rating-5.png" className="rating-image"/></h3>
            </div>
       </div>
    );
};

