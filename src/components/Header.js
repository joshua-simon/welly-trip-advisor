import { useContext } from 'react'
import { FirebaseContext } from '../FirebaseContext';
import { NavLink } from 'react-router-dom'
import { getAuth, signOut } from "firebase/auth";

const Header =  () => {

const { activeUser } =  useContext(FirebaseContext)

const handleClick = (e) => {
  e.preventDefault()
  const auth = getAuth()
  signOut(auth).then(() => {
    console.log('signed out')
  })
  .catch(err => {
    console.log(err)
  })
  alert('You have signed out of Wellyadvisor')
}

    return(
        <header>
            <div className = 'container'>
                <div className = 'logo'>
                    <img src="https://img.icons8.com/ios/50/000000/tripadvisor.png"/>
                    <p>Wellyadvisor</p>
                </div>
                <div className='container-links'>
                    <NavLink to = '/'>
                        <img src="https://img.icons8.com/ios/50/000000/home--v1.png"/>
                    </NavLink>
                    <img onClick = {handleClick} src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-logout-interface-dreamstale-lineal-dreamstale.png" style = {{cursor:'pointer'}}/>
                    {!activeUser ? <NavLink to = '/login' className = 'login-register'>Login</NavLink> : null }
                    <NavLink to = '/signup' className = 'login-register'>
                      Register
                    </NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header