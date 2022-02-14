import { useState,useEffect } from 'react'
import { firebase } from '../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = () => {

    const [{ userName, email, password },setFormDetails] = useState({ userName:'', email:'', password:''})

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
    const auth = getAuth()
    const createdUserResult = createUserWithEmailAndPassword(auth,email,password)     
    await firebase
    .firestore()
    .collection('users')
    .add({
        dateCreated: Date.now(),
        emailAddress: email,
        username: userName,
        userId: (await createdUserResult).user.uid
    })
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
                    placeholder = 'Username'
                    aria-label = 'Enter your username'
                    name = 'userName'
                    onChange = {handleChange}
                />
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
                    Sign up
                </button>
            </form>
        </div>
    )
}

export default SignUp