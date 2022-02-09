// import { createContext,useState,useEffect } from "react";
// import { firebase } from './firebaseConfig'

// export const FirebaseContext = createContext()

// const [ venues,setVenues ] = useState([])
// useEffect(() => {
//     const venueArray = []
//     const getAllVenues =  () => {
//             firebase
//             .firestore()
//             .collection('venues')
//             .get()
//             .then(snapshot => {
//                 snapshot.forEach(venue => {
//                     venueArray.push(venue)
//                 })
//                 setVenues(venueArray)
//             })
//     }
//     getAllVenues()
//   }, []);

//   const [...venueData] = venues.map(venue => {
//     const { name,photoUrl,averageRating,numRatings,type } = venue.data()
//     return {name:name, 
//             photoUrl:photoUrl, 
//             averageRating:averageRating,
//             numRatings:numRatings,
//             type:type, 
//             id:venue.id}
//   })

// const FirebaseContextProvider = (props) => {
//     <FirebaseContext.Provider value = {venueData}>
//         {props.children}
//     </FirebaseContext.Provider>
// }

// export default FirebaseContextProvider