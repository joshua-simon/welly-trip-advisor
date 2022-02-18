import Header from '../components/Header'
import VenueCard from '../components/VenueCard';
import { useParams } from 'react-router-dom';
import { useVenues } from '../useVenue'

//good thing to test: is the id being extracted from useparams


const VenueType = () => {

    const { venueData } = useVenues()
    let {id} = useParams()
    
    const filteredVenue = venueData.filter((venue) => {
       if(venue.type){
           return venue.type === id
       }
    })

    console.log(filteredVenue.length)

 return(
     <div>
         <Header/>
         <h3 style = {{color: '#587a25'}}>{`${id}s (${filteredVenue.length})`}</h3>
         <VenueCard venueData = {filteredVenue}/>
     </div>
 )
}

export default VenueType