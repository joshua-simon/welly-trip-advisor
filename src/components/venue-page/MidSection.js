import { useEffect,useState } from 'react'
import { convertToStars } from "../../helperFunctions";
import { getAverageRating } from '../../helperFunctions';

const MidSection =  ({ filteredVenue }) => {

    const [
      { foodRating, serviceRating, valueRating, atmosphereRating },
      setFoodRating,
    ] = useState({
      foodRating: [],
      serviceRating: [],
      valueRating: [],
      atmosphereRating: [],
    });

    useEffect(() => {
      const setRatings = async function () {
        const extractRatings = () => {
          const foodRatings = [];
          const serviceRatings = [];
          const valueRatings = [];
          const atmosphereRatings = [];
          filteredVenue.length > 0 &&
            filteredVenue[0].reviews.map((rating) => {
              foodRatings.push(rating.ratingFood);
              serviceRatings.push(rating.ratingService);
              valueRatings.push(rating.ratingValue);
              atmosphereRatings.push(rating.ratingAtmosphere);
            });
          return {
            foodRatings,
            serviceRatings,
            valueRatings,
            atmosphereRatings,
          };
        };
        const ratings = await extractRatings();
        const getRating = (rating) => {
          const ratingInt = rating.map((item) => parseInt(item));
          const ratingSum = ratingInt.reduce((x, y) => x + y);
          const ratingAve = Math.round(ratingSum / rating.length);
          return ratingAve;
        };
        const { foodRatings } = extractRatings();
        const { serviceRatings } = extractRatings();
        const { valueRatings } = extractRatings();
        const { atmosphereRatings } = extractRatings();
        const foodRating = getRating(foodRatings);
        const serviceRating = getRating(serviceRatings);
        const valueRating = getRating(valueRatings);
        const atmosphereRating = getRating(atmosphereRatings);
        setFoodRating({
          foodRating: foodRating,
          serviceRating: serviceRating,
          valueRating: valueRating,
          atmosphereRating: atmosphereRating,
        });
      };
      setRatings();
    }, [filteredVenue]);



  return (
    <div className="venue-page-mid">
      {filteredVenue.map((venue) => {
        {const review =  venue.reviews.length == 1 ? 'review' : 'reviews'}
        return (
          <>
            <div className="venue-page-section left">
              <h2>Ratings and reviews</h2>
              <p>
                {venue.averageRating}
                {` `}
                {convertToStars(venue.averageRating)}
                {`  `}{venue.reviews.length === 1 ? (`${venue.reviews.length} review`) : (`${venue.reviews.length} reviews`) }
              </p>
              <div className="ratings">
                <h3>Ratings</h3>
                <p>Food{convertToStars(foodRating)}</p>
                <p>Value{convertToStars(valueRating)}</p>
                <p>Service{convertToStars(serviceRating)}</p>
                <p>Atmosphere{convertToStars(atmosphereRating)}</p>
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
