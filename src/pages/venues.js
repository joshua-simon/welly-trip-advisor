import { useState,useEffect } from 'react'
import { getVenues } from '../services/firebase'
import { firebase } from '../firebaseConfig'
import VenueDetails from '../components/VenueDetails'

const Venue = () => {

    return(
        <div>
            <VenueDetails />
        </div>
    )
}

export default Venue