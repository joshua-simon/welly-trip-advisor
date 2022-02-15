import { useParams } from 'react-router-dom';
import { useVenues } from '../useVenue'
import Header from '../components/Header'

const WriteReview = () => {

    let {id} = useParams()
    const { venueData } = useVenues()

    const filteredVenue = venueData.filter(item => {
        return item.id === id
    })

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
        </div>
    )
}

export default WriteReview