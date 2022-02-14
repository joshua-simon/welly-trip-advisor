import Header from '../components/Header';
import Options from '../options'
import Reccomended from '../components/Recommended'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Landing = () => {
    const auth = getAuth()
    const user = auth.currentUser
    console.log(`this is user ${user.uid}`)
    return(
        <div>
            <Header/>
            <Options/>
           <Reccomended/>
        </div>
    )
}

export default Landing