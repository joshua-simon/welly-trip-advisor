import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/landing'
import Venue from './pages/venues'
import './styles.css';


function App() {
  const test = 'this is a test'
  return (
    <Router>
      <div>
        <Routes>
          <Route path = '/' exact element = {<Landing />} />
          <Route path = '/venue/:id' element = {<Venue/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
