import { useState,useEffect } from 'react'
import {getVenues} from '../../services/firebase.js'

const Photo = () => {
    const [ venues,setVenues ] = useState(null)

    useEffect(() => {
        async function getAllVenues(){
            const response = await getVenues()
            await setVenues(response)
        }
        getAllVenues()
    },[])

    const response = getVenues()
    console.log(response)
    console.log(venues)

    return(
        <div>
            {venues.map((item) => {
                return(<img src = {item.photoUrl}/>)
            })}
        </div>
    )
}

export default Photo