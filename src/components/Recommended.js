import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import VenueCard from "./VenueCard";
import { useVenues } from '../useVenue.js'

const Reccomended = () => {

  const { venueData } = useVenues()

  return (
    <div>
      {!venueData[0] ? (
        <>
          <p><Skeleton/></p>
        </>
      ) : (
        <>
          <p className="recommended">Recommended venues</p>
          <VenueCard venueData = {venueData}  />
        </>
      )}
    </div>
  );
};

export default Reccomended;
