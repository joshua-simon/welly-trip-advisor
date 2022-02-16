import { useState,useEffect } from 'react'
import { firebase } from './firebaseConfig'


export async function GetUserById(userId){

const result = await firebase
    .firestore()
    .collection('users')
    .where("userId", "==", userId)
    .get()

    return result

}





// export function GetUserById (userId){
//   const [user, setUser] = useState([]);
//   useEffect(() => {
//     const userArray = [];
//     const getSpecificUser = () => {
//       firebase
//         .firestore()
//         .collection("users")
//         .where( "userId", "==", userId)
//         .get()
//         .then((snapshot) => {
//           snapshot.forEach((user) => {
//             userArray.push(user);
//           });
//           setUser(userArray);
//         });
//     };
//     getSpecificUser();
//   }, []);

//   const [...userData] = user.map((item) => {
//     const { dateCreated, emailAddress, userId, username} = item.data();
//     return ({
//       dateCreated:dateCreated,
//       emailAddress:emailAddress,
//       userId:userId,
//       username:username
//     })
//   });
//   return {userData}
// };
