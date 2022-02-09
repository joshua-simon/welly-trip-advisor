import { convertToStars } from '../helperFunctions'

const VenueCard = ({venues}) => {
    return(
    <div className = 'venueCard-container'>
        {venues && venues.map((item) => {
            return(
            <div className="venueCard-item">
                <img src = {item.photoUrl}/> 
                <div className = 'venueCard-info'>
                    <p className='venueCard-header'>{item.name}</p>
                    <p className='venueCard-ratings'>{convertToStars(item.averageRating)}  {item.numRatings}</p>
                    <p className='venueCard-type'>{item.type} | Address</p>
                </div>
            </div>
            )
        })}
    </div> 
    )
}

export default VenueCard