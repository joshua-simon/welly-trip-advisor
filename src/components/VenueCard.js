import { Link } from 'react-router-dom'
import { convertToStars } from '../helperFunctions'


const VenueCard = ({ venueData }) => {
  return (
    <div className="venueCard-container">
      {venueData &&
        venueData.map((item) => {
          return (
            <div className="venueCard-item">
              <Link to={`/venue/${item.id}`} style={{ textDecoration: "none" }}>
                <img src={item.photoUrl} />
              </Link>
              <div className="venueCard-info">
                <p className="venueCard-header">{item.name}</p>
                <p className="venueCard-ratings">
                  {convertToStars(item.averageRating)}{" "}
                  {`(${item.numRatings} reviews)`}
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