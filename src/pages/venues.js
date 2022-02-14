import { useParams } from 'react-router-dom';
import { useVenues } from '../useVenue';
import Header from '../components/Header'
import VenueDetails from '../components/venue-page/VenueDetails'
import MidSection from '../components/venue-page/MidSection';
import ReviewSection from '../components/venue-page/ReviewSection';

const Venue = () => {

    let {id} = useParams()
    const { venueData } = useVenues()

    const filteredVenue = venueData.filter(item => {
        return item.id === id
    })

    return(
        <div>
            <Header/>
            <VenueDetails filteredVenue = {filteredVenue}/>
            <MidSection filteredVenue = {filteredVenue}/>
            <ReviewSection filteredVenue = {filteredVenue}/>
        </div>
    )
}

export default Venue