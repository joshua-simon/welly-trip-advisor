import { Link } from 'react-router-dom'

const ReviewSection = ({ filteredVenue }) => {
    return(
        <div>
            {filteredVenue.map((venue) => {
                return(
                    <div className="review-section-container">
                        <div className='review-section-header'>
                        <h1>Reviews</h1>
                        <Link to = '/write-review'>
                            <p>Write a review</p>
                        </Link>
                       </div>
                       <div className='review-section-reviews'>
                           reviews
                       </div>
                   </div>
                )
            })}
        </div>
    )
}

export default ReviewSection