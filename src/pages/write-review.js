import { useParams } from 'react-router-dom';
import { useState } from 'react'
import { useVenues } from '../useVenue'
import  { firebase,FieldValue } from '../firebaseConfig'
import Header from '../components/Header'

const WriteReview = () => {

    const [ {title,review,rating}, setReview ] = useState({title:'', review:'', rating:''})

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

    const handleSubmit = (e) => {
        const newReview = {
            title:title,
            review:review,
            rating:rating
        }
        e.preventDefault()
        firebase
        .firestore()
        .collection('venues')
        .doc(id)
        .update({
            reviews: FieldValue.arrayUnion(newReview)
        })
    }

    console.log(`title: ${title}`)
    console.log(`review: ${review}`)
    console.log(`rating: ${rating}`)

    return(
        <div>
            <Header/>
            <div className='write-review-top'>
                {filteredVenue.map(venue => {
                    return(
                        <div className='write-review-top-img'>
                            <img src = {venue.photoUrl}/>
                            <div className='write-review-top-text'>
                                <p>{venue.name}</p>
                                <p>Venue address</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='write-review-form'>
                <form onSubmit = {handleSubmit}>
                    <label>
                        Rating <br></br>
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
                        <input type = 'text' name = 'review' value = {review} onChange = {handleChange}/>
                    </label>
                    <button type = 'submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default WriteReview