import { useState,useEffect } from 'react'
import {getVenues} from '../services/firebase'
import VenueCard from './VenueCard'

const Reccomended = () => {

    const [ venues,setVenues ] = useState([])

    useEffect(() => {
        async function getAllVenues(){
            const response = await getVenues()
            await setVenues(response)
        }
        getAllVenues()
    },[])

    return(
        <div>
            <VenueCard venues = {venues}/>
        </div>
    )
}

export default Reccomended