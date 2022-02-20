import { useEffect,useState } from 'react'
import { convertToStars } from "../../helperFunctions";
import { getAverageRating } from '../../helperFunctions';

const MidSection =  ({ filteredVenue }) => {


    const [foodRating, setFoodRating] = useState()
    useEffect(() => {
      const doIt = async function () {
        const extractRatings =  () => {
          const foodRatings =  []
          const serviceRatings = []
          const valueRatings = []
          const atmosphereRatings = []
           filteredVenue.length>0 && filteredVenue[0].reviews.map((rating) => {
           foodRatings.push(rating.ratingFood)
           serviceRatings.push(rating.ratingService)
           valueRatings.push(rating.ratingValue)
           atmosphereRatings.push(rating.ratingAtmosphere)
          })
          return foodRatings
        }
        const ratings = await extractRatings()
        const getRating =  (rating) =>{
          const ratingInt =  rating.map((item) => parseInt(item))
          const ratingSum = ratingInt.reduce((x,y) => x+y)
          const ratingAve = Math.round(ratingSum/rating.length)
          return ratingAve
          }
        const foodRating = getRating(ratings)
        setFoodRating(foodRating) 
      }
      doIt()
    }, [filteredVenue])



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
                {`  `}({`${venue.reviews.length} reviews`})
              </p>
              <div className="ratings">
                <h3>Ratings</h3>
                <p>Food{convertToStars(foodRating)}</p>
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
