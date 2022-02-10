import { convertToStars } from "../../helperFunctions";

const MidSection = ({ filteredVenue }) => {

const testData = ['Food','Service','Value','Atmosphere']

  return (
    <div className="venue-page-mid">
      {filteredVenue.map((venue) => {
        return (
          <>
            <div className="venue-page-section left">
              <h2>Ratings and reviews</h2>
              <p>{venue.averageRating}{` `}{convertToStars(venue.averageRating)}{`  `}({`${venue.numRatings} reviews`})</p>
              <div className="ratings">
                  <h3>Ratings</h3>
                <div>
                    {testData.map((item) => {
                        return(
                            <div className="ratings-item">
                                <p>{item}</p> 
                                <p>{convertToStars(venue.averageRating)}</p>
                            </div>
                        )
                    })}
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
