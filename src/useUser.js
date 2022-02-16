import { useState,useEffect } from 'react'
import { firebase } from './firebaseConfig'


export  function GetUsers (){
  const [user, setUser] = useState([]);
  useEffect(() => {
    const userArray = []
    const getSpecificUser = async () => {
      await firebase
        .firestore()
        .collection("users")
        .get()
        .then((snapshot) => {
          snapshot.forEach((user) => {
            userArray.push(user);
          });
          setUser(userArray);
        });
    };
    getSpecificUser();
  }, []);

  const [...userData] = user.map((item) => {
    const { dateCreated, emailAddress, userId, username,reviews} = item.data();
    return ({
      dateCreated:dateCreated,
      emailAddress:emailAddress,
      userId:userId,
      username:username,
      reviews:reviews
    })
  });
  return {userData}
};
