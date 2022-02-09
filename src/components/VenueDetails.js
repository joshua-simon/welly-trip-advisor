

const VenueDetails = ({filteredVenue}) => {

    return(
        <div>
            {
                filteredVenue.map(venue => {
                    return <p>{venue.name}</p>
                })
            }
        </div>
    )
}

export default VenueDetails