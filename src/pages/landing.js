import {firebase} from '../firebaseConfig'
import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Options from '../options'
import Reccomended from '../components/Recommended'

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
            <Header/>
            <Options/>
           <Reccomended/>
        </div>
    )
}

export default Landing