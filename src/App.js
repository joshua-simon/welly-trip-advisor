import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing'
import Venue from './pages/venues'
import SignUp from './pages/sign-up';
import Login from './pages/login';
import WriteReview from './pages/write-review';
import VenueType from './pages/venue-type'
import FirebaseContextProvider  from './FirebaseContext'
import './styles.css';

function App() {
  return (
  <FirebaseContextProvider>
    <Router>
      <div>
        <Routes>
          <Route path = '/' exact element = {<Landing />} />
          <Route path = '/venue/:id' element = {<Venue/>}/>
          <Route path = '/signup' element = {<SignUp/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/write-review/:id' element = {<WriteReview/>}/>
          <Route path = '/venue-type/:id' element = {<VenueType/>}/>
        </Routes>
      </div>
    </Router>
  </FirebaseContextProvider>
  );
}

export default App;
