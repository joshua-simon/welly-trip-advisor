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
                            <div>
                                <p>{item}</p>
                                <p>{convertToStars(venue.averageRating)}</p>
                            </div>
                        )
                    })}
                </div>
              </div>
            </div>
            <div className="venue-page-section mid">mid</div>
            <div className="venue-page-section right">right</div>
          </>
        );
      })}
    </div>
  );
};

export default MidSection;
