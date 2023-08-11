import './App.css';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import ApiCall from './components/ApiCall';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'; // Updated import
import Trending from './components/Trending';

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/add' element={<Add />} />
        <Route path='/trending' element={<Trending />} />
        <Route path='/watchlist' element={<WatchList />} />
      </Routes>
    </Router>
  );
}

export default App;
