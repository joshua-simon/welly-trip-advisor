import Header from '../components/Header';
import Options from '../options'
import Reccomended from '../components/Recommended'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const Landing = () => {
    return(
        <div>
            <Header/>
            <Options/>
           <Reccomended/>
        </div>
    )
}

export default Landing