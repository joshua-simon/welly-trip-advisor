import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing'
import Venue from './pages/venues'
import SignUp from './pages/sign-up';
import Login from './pages/login';
import './styles.css';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path = '/' exact element = {<Landing />} />
          <Route path = '/venue/:id' element = {<Venue/>}/>
          <Route path = '/signup' element = {<SignUp/>}/>
          <Route path = '/login' element = {<Login/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
