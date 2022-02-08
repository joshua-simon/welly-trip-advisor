import { useState,useEffect } from 'react'
import {getVenues} from '../../services/firebase.js'

const Photo = () => {
    const [ venues,setVenues ] = useState([])

    useEffect(() => {
        console.log('it got here')
        async function getAllVenues(){
            const response = await getVenues()
            await setVenues(response)
        }
        getAllVenues()
    },[])

    console.log(venues)
    return(
        <div className = 'venueCard-container'>
            {venues && venues.map((item) => {
                return(<img src = {item.photoUrl}/>)
            })}
        </div>
    )
}

export default Photo