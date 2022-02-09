import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { firebase } from '../firebaseConfig'
import VenueCard from "./VenueCard";

const Reccomended = () => {

  const [ venues,setVenues ] = useState([])
    useEffect(() => {
        const venueArray = []
        const getAllVenues =  () => {
                firebase
                .firestore()
                .collection('venues')
                .get()
                .then(snapshot => {
                    snapshot.forEach(venue => {
                        venueArray.push(venue)
                    })
                    setVenues(venueArray)
                })
        }
        getAllVenues()
      }, []);

  const [...venueData] = venues.map(venue => {
    const { name,photoUrl,averageRating,numRatings,type } = venue.data()
    return {name:name, photoUrl:photoUrl, averageRating:averageRating,numRatings:numRatings,type:type, id:venue.id}
  })

  return (
    <div>
      {!venues[0] ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          <p className="recommended">Recommended for Josh</p>
          <VenueCard venueData={venueData} />
        </>
      )}
    </div>
  );
};

export default Reccomended;
