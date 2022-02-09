import { useState,useEffect } from 'react'
import {firebase} from '../firebaseConfig'

export async function getVenues() {
    const response = await firebase
    .firestore()
    .collection('venues')
    .get()
    return response.docs
        .map((venue) => ({...venue.data()}))
}

export function GetVenueId() {
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
      return venues
    }


