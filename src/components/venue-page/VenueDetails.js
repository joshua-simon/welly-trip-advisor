import { convertToStars } from '../../helperFunctions'

const VenueDetails = ({filteredVenue}) => {
    


    return(
        <div>
            {filteredVenue.map((venue) => {
                return(
                    <div className="venue-page-top" key = {venue.name}>
                        <h1>{venue.name}</h1>
                        <img className='header-photo' src = {venue.photoUrl} alt = {venue.name}/>
                        <div className="inner-flex-one">
                            <p>{convertToStars(venue.averageRating)}</p>
                            <p>({venue.reviews.length === 1 ? (`${venue.reviews.length} review`) : (`${venue.reviews.length} reviews`) })</p>
                            <p>{venue.type}</p>
                        </div>
                        <div className="inner-flex-two">
                            <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-location-pin-essentials-prettycons-lineal-prettycons.png" alt = "pin"/>
                            <p>{venue.address}</p>
                            <img src="https://img.icons8.com/ios/50/000000/apple-phone.png" alt = "phone"/>
                            <p>{venue.phone}</p>
                            <img src="https://img.icons8.com/material-outlined/24/000000/laptop.png" alt = "laptop"/>
                            <p><a href = {venue.website}>Website</a></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VenueDetails