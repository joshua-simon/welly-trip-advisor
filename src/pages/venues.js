import VenueDetails from '../components/VenueDetails'
import { useParams } from 'react-router-dom';
import { useVenues } from '../useVenue';

const Venue = () => {

    let {id} = useParams()
    const { venueData } = useVenues()

    const filteredVenue = venueData.filter(item => {
        return item.id == id
    })

    return(
        <div>
            <VenueDetails filteredVenue = {filteredVenue}/>
        </div>
    )
}

export default Venue