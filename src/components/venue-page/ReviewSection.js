
const ReviewSection = ({ filteredVenue }) => {
    return(
        <div>
            {filteredVenue.map((venue) => {
                       <div className="review-section-header">
                       <h1>Reviews</h1>
       
                   </div>
            })}
        </div>
    )
}

export default ReviewSection