import { useState,useEffect } from 'react'
import { firebase } from './firebaseConfig'

export function useVenues (){
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    const venueArray = [];
    const getAllVenues = () => {
      firebase
        .firestore()
        .collection("venues")
        .get()
        .then((snapshot) => {
          snapshot.forEach((venue) => {
            venueArray.push(venue);
          });
          setVenues(venueArray);
        });
    };
    getAllVenues();
  }, []);

  const [...venueData] = venues.map((venue) => {
    
    const { name, photoUrl, averageRating, numRatings, type,reviews } = venue.data();
    return ({
      name: name,
      photoUrl: photoUrl,
      averageRating: averageRating,
      numRatings: numRatings,
      type: type,
      id: venue.id,
      reviews:reviews
    })
  });
  return {venueData}
};

