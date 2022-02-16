import { Link } from 'react-router-dom'
import { convertToStars } from '../../helperFunctions'

const ReviewSection =  ({ filteredVenue,id }) => {

  return (
    <div>
      <div className="review-section-container">
        <div className="review-section-header">
          <h1>Reviews</h1>
            <Link to={`/write-review/${id}`}>
            <p>Write a review</p>
            </Link>
        </div>
        <div className="review-section-reviews">
          {filteredVenue.map((venue) => {
            return(
              venue.reviews.map((review) => {
                return(
                  <div className='review-section-reviews-container'>
                  <p>{review.title}</p>
                  <p>{convertToStars(review.rating)}</p>
                  <p>{review.review}</p>
                  </div>
                )
              })
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection

