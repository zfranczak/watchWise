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
import TopRated from './components/TopRated';

import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Navigation />

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/watched' element={<Watched />} />
          <Route path='/add' element={<Add />} />
          <Route path='/toprated' element={<TopRated />} />
          <Route path='/watchlist' element={<WatchList />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
