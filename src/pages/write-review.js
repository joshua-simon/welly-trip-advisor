import { useParams,useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth'
import { useState,useContext, useEffect } from 'react'
import { FirebaseContext } from '../FirebaseContext';
import { useVenues } from '../useVenue'
import { GetUsers } from '../useUser';
import  { firebase,FieldValue } from '../firebaseConfig'
import Header from '../components/Header'

const WriteReview =  () => {

    const navigate = useNavigate()

    const { activeUser } = useContext(FirebaseContext)
    const {uid} = activeUser || {}
    const { userData } = GetUsers()

    const filteredUser = userData.filter(user => {
        return user.userId === uid
     })


    const [ {
        title,
        review,
        rating,
        ratingService,
        ratingFood,
        ratingValue,
        ratingAtmosphere
    }, setReview ] = useState({
        title:'', 
        review:'', 
        rating:'',
        ratingService:'',
        ratingFood:'',
        ratingValue:'',
        ratingAtmosphere:'',
        })

     

    let {id} = useParams()
    const { venueData } = useVenues()

    const filteredVenue = venueData.filter(item => {
        return item.id === id
    })
  
    const handleChange = (e) => {
        const { name,value } = e.target
        e.preventDefault()
        setReview(prevState => ({
            ...prevState,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        const newReview = {
            title:title,
            review:review,
            rating:rating,
            ratingService: ratingService,
            ratingFood: ratingFood,
            ratingValue:ratingValue,
            ratingAtmosphere:ratingAtmosphere,
            username:filteredUser[0].username
        }
        e.preventDefault()
        await firebase
        .firestore()
        .collection('venues')
        .doc(id)
        .update({
            reviews: FieldValue.arrayUnion(newReview)
        })

        navigate(`/venue/${id}`)
    }


    return(
        <div>
            <Header/>
            <div className='write-review-top'>
                {filteredVenue.map(venue => {
                    return(
                        <div className='write-review-top-img'>
                            <img src = {venue.photoUrl}/>
                            <div className='write-review-top-text'>
                                <h2 style = {{color:'#587a25'}}>{`${venue.name} (${venue.reviews.length} reviews)`}</h2>
                                <p>{venue.address}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='write-review-form'>
                <form onSubmit = {handleSubmit}>
                <h2>Your first hand experiences helps other travellers!</h2>
                    <label>
                        Your overall rating of this venue <br></br>
                        <select name = 'rating' onChange = {handleChange}>
                            <option value = '1'>1</option>
                            <option value = '2'>2</option>
                            <option value = '3'>3</option>
                            <option value = '4'>4</option>
                            <option value = '5'>5</option>
                        </select>
                    </label>
                    <label>Title of your review <br></br>
                        <input type = 'text' name = 'title' value = {title} onChange = {handleChange}/>
                    </label>
                    <label >Your review <br></br>
                        <textarea type = 'text' name = 'review' value = {review} onChange = {handleChange}/>
                    </label>
                    <label>
                        Service <br></br>
                        <select name = 'ratingService' onChange = {handleChange}>
                            <option value = '1'>1</option>
                            <option value = '2'>2</option>
                            <option value = '3'>3</option>
                            <option value = '4'>4</option>
                            <option value = '5'>5</option>
                        </select>
                    </label>
                    <label>
                        Food <br></br>
                        <select name = 'ratingFood' onChange = {handleChange}>
                            <option value = '1'>1</option>
                            <option value = '2'>2</option>
                            <option value = '3'>3</option>
                            <option value = '4'>4</option>
                            <option value = '5'>5</option>
                        </select>
                    </label>
                    <label>
                        Value <br></br>
                        <select name = 'ratingValue' onChange = {handleChange}>
                            <option value = '1'>1</option>
                            <option value = '2'>2</option>
                            <option value = '3'>3</option>
                            <option value = '4'>4</option>
                            <option value = '5'>5</option>
                        </select>
                    </label>
                    <label>
                        Atmosphere <br></br>
                        <select name = 'ratingAtmosphere' onChange = {handleChange}>
                            <option value = '1'>1</option>
                            <option value = '2'>2</option>
                            <option value = '3'>3</option>
                            <option value = '4'>4</option>
                            <option value = '5'>5</option>
                        </select>
                    </label>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default WriteReview