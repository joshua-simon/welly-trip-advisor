import { useContext } from 'react'
import { FirebaseContext } from '../../FirebaseContext';
import { Link } from 'react-router-dom'
import { convertToStars } from '../../helperFunctions'


const ReviewSection =  ({ filteredVenue,id }) => {

  const { activeUser } =  useContext(FirebaseContext)

  return (
    <div>
      <div className="review-section-container">
        <div className="review-section-header">
          <h2>Reviews</h2>
            {
              activeUser ? (
                <Link to={`/write-review/${id}`}>
                  <p>Write a review</p>
                </Link>
              ) : <p className='review-notRegistered'>Register to write reviews!</p>
            }
        </div>
        <div className="review-section-reviews">
          {filteredVenue.map((venue) => {
            return(
              venue.reviews.map((review) => {
                console.log(review.username)
                return(
                  <div className='review-section-reviews-container'>
                    <div className='review-section-reviews-userDetails'>
                      
                      <img src = {`/profilePics/${review.username}.jpg`}/>
                      <p>{`Review by ${review.username}`}</p>
                    </div>
                    <div className='review-section-reviews-reviewDetails'>
                      <p className='child-item'>{convertToStars(review.rating)}</p>
                      <h3 className='child-item'>{review.title}</h3>
                      <p className='child-item'>{review.review}</p>
                    </div>
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

