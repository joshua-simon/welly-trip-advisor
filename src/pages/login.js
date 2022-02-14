import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { firebase } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const [{ email, password },setFormDetails] = useState({ email:'', password:''})
    const navigate = useNavigate()

    const handleChange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormDetails(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    }

const handleSubmit =  async (e) => {
    e.preventDefault()
    navigate('/')
}

    useEffect(() => {
        document.title = 'Sign Up - Wellyadvisor'
    },[])

    return(
        <div className = 'signup-container'>
            <p>Wellyadvisor</p>
            <form onSubmit = {handleSubmit} method = 'POST'>
                <input
                    type = 'text'
                    placeholder = 'Email'
                    aria-label = 'Enter your email'
                    name = 'email'
                    onChange = {handleChange}
                />
                <input
                    type = 'password'
                    placeholder = 'Password'
                    aria-label = 'Enter your password'
                    name = 'password'
                    onChange = {handleChange}
                />
                <button type ='submit'>
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login