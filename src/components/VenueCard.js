import { Link } from 'react-router-dom'
import { convertToStars } from '../helperFunctions'



const VenueCard = ({ venueData }) => {


  return (
    <div className="venueCard-container">
      {venueData &&
        venueData.map((item) => {
          return (
            <div className="venueCard-item" key = {item.id}>
              <Link to={`/venue/${item.id}`} style={{ textDecoration: "none" }}>
                <img src={item.photoUrl} alt = {item.name} />
              </Link>
              <div className="venueCard-info">
                <p className="venueCard-header">{item.name}</p>
                <p className="venueCard-ratings">
                  {convertToStars(item.averageRating)}{" "}
                  {item.reviews.length === 1 ? (`${item.reviews.length} review`) : (`${item.reviews.length} reviews`) }
                </p>
                <p className="venueCard-type">{item.type} | {item.address}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default VenueCard