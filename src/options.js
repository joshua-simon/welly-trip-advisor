import { NavLink } from 'react-router-dom'

const Options = () => {
    return(
        <div className = 'options-container'>
            <NavLink to ='/venue-type/Restaurant' className = 'options-item'>
                <p>Restaurants</p>
                <img src="https://img.icons8.com/ios/50/000000/restaurant.png"/>
            </NavLink>
            <NavLink to ='/venue-type/Bar' className = 'options-item'>
                <p>Bars</p>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/beer.png"/>
            </NavLink>
            <NavLink to ='/venue-type/Cafe' className = 'options-item'>
                <p>Cafes</p>
                <img src="https://img.icons8.com/ios-glyphs/30/000000/coffee.png"/>
            </NavLink>
        </div>
    )
}

export default Options