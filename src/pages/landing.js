import {firebase} from '../firebaseConfig'
import { useEffect, useState } from 'react';

const Landing = () => {
     
    const [ cafe, setCafe ] = useState([])
    useEffect(() => {
        const result = firebase
        .firestore()
        .collection('venues')
        .get()
        setCafe(result)
    },[])


    return(
        <div>
            this is the landing
        </div>
    )
}

export default Landing