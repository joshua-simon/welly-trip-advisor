import { convertToStars } from "../../helperFunctions";

const MidSection = ({ filteredVenue }) => {

  const getRatings =  () => {
  
  }

console.log(getRatings())



  return (
    <div className="venue-page-mid">
      {filteredVenue.map((venue) => {
        return (
          <>
            <div className="venue-page-section left">
              <h2>Ratings and reviews</h2>
              <p>
                {venue.averageRating}
                {` `}
                {convertToStars(venue.averageRating)}
                {`  `}({`${venue.numRatings} reviews`})
              </p>
              <div className="ratings">
                <h3>Ratings</h3>
                <div className="ratings-item">
                  {/* <p>Food</p> */}
                  {/* <p>{convertToStars(venueRatings.food)}</p>
                  <p>Service</p>
                  <p>{convertToStars(venueRatings.service)}</p>
                  <p>Value</p>
                  <p>{convertToStars(venueRatings.value)}</p>
                  <p>Atmosphere</p>
                  <p>{convertToStars(venueRatings.atmosphere)}</p> */}
                </div>
              </div>
            </div>
            <div className="venue-page-section mid">
              <h2>Details</h2>
              <div className="details-container">
                <div className="details-item">
                  <h3>Cuisines</h3>
                  <p>Cafe</p>
                </div>
                <div className="details-item">
                  <h3>Special diets</h3>
                  <p>Vegetarian friendly, vegan options, gluten-free options</p>
                </div>
                <div className="details-item">
                  <h3>Meals</h3>
                  <p>Breakfast, Brunch, Lunch, After hours</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default MidSection;
