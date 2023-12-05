const ReviewContainer = ({movie}) => {
    return (
        <>
        <div class="review-container">
            <h1 class="review-title">Movie Review: </h1>
            <div class="review-content">
                <p class="review-text">
                    This is a sample movie review text. You can provide your detailed review here, discussing the plot, characters, and your overall opinion of the movie.
                </p>
                <p class="review-author">Review by John Doe</p>
            </div>
            
            <div class="review-form">
                <h1 class="review-title">Write Your Review:</h1>
                <label for="movieName">Movie Name:</label>
                <input type="text" id="movieName" class="form-input" placeholder="Enter movie name"></input>
                <label for="description">Review Description:</label>
                <textarea id="description" class="form-textarea" placeholder="Write your review description"></textarea>
                <label for="rating" class="form-rating">Star Rating (out of 5):</label>
                <input type="number" id="rating" class="form-input" placeholder="Enter your rating (1-5)"></input>
            </div>
        </div>
        </>
    );
}

export default ReviewContainer;