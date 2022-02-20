import { convertToStars } from '../../helperFunctions'

const VenueDetails = ({filteredVenue}) => {

    return(
        <div>
            {filteredVenue.map((venue) => {
                return(
                    <div className="venue-page-top">
                        <h1>{venue.name}</h1>
                        <img className='header-photo' src = {venue.photoUrl}/>
                        <div className="inner-flex-one">
                            <p>{convertToStars(venue.averageRating)}</p>
                            <p>({`${venue.reviews.length} reviews`})</p>
                            <p>{venue.type}</p>
                        </div>
                        <div className="inner-flex-two">
                            <img src="https://img.icons8.com/external-prettycons-lineal-prettycons/49/000000/external-location-pin-essentials-prettycons-lineal-prettycons.png"/>
                            <p>{venue.address}</p>
                            <img src="https://img.icons8.com/ios/50/000000/apple-phone.png"/>
                            <p>{venue.phone}</p>
                            <img src="https://img.icons8.com/material-outlined/24/000000/laptop.png"/>
                            <p><a href = {venue.website}>Website</a></p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default VenueDetails