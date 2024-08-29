import React, { useState } from 'react'; // Import useState
import './App.css';
import Navigation from './components/Navigation';
import Landing from './components/Landing';
import ApiCall from './components/ApiCall';
// import SignUp from './components/user-profiles/SignUp';
// import Login from './components/user-profiles/Login';
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import TopRated from './components/TopRated';

import { GlobalProvider } from './context/GlobalState';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [providersData, setProvidersData] = useState({});

  const updateProvidersData = (movieId, data) => {
    setProvidersData((prevData) => ({
      ...prevData,
      [movieId]: data,
    }));
  };

  return (
    <AuthProvider>
      <GlobalProvider>
        <Router>
          <Navigation />

          <Routes>
            <Route path='/' element={<Landing />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<Login />} />
            <Route path='/watched' element={<Watched />} />
            <Route path='/add' element={<Add />} />
            <Route
              path='/toprated'
              element={<TopRated updateProvidersData={updateProvidersData} />}
            />

            <Route
              path='/watchlist'
              element={<WatchList providersData={providersData} />}
            />
          </Routes>
        </Router>
      </GlobalProvider>
    </AuthProvider>
  );
}

export default App;
