import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {

    const auth = getAuth()
    const user = auth.currentUser
    console.log(`this is user login ${user}`)

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

const handleSubmit =   (e) => {
    e.preventDefault()
    const auth = getAuth()
    signInWithEmailAndPassword(auth,email,password)
    .then(() => {
        console.log('logged in')
        navigate('/')
    })
    .catch(err => {
        console.log(err)
    })
}

    useEffect(() => {
        document.title = 'Login - Wellyadvisor'
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