import { useEffect,useState } from 'react'
import { firebase } from './firebaseConfig';
import { auth } from "./firebaseConfig";
import { onAuthStateChanged } from 'firebase/auth';
import { createContext } from "react";

export const FirebaseContext = createContext()


const FirebaseContextProvider = (props) => {
  const [activeUser, setActiveUser] = useState(null);

onAuthStateChanged(auth, (user) => {
    if(user){
        setActiveUser(user)
    }else{
        setActiveUser(null)
    }
})
  return (
    <FirebaseContext.Provider value={{ activeUser }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseContextProvider