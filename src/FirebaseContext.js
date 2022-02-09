import { createContext } from "react";
import { useVenues } from "./useVenue";

export const FirebaseContext = createContext()

const { venueData } = useVenues()

const FirebaseContextProvider = (props) => {
    <FirebaseContext.Provider value = {venueData}>
        {props.children}
    </FirebaseContext.Provider>
}

export default FirebaseContextProvider