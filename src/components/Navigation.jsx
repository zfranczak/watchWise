import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <header className='nav'>
      <div className='container'>
        <div className='inner-content'>
          <div className='site-title'>
            <Link to='/' className='site-title'>
              WatchWise
            </Link>
          </div>
          <ul className='nav-locations'>
            <li>
              <Link to='/watchList'>Watch List</Link>
            </li>
            <li>
              <Link to='/watched'>Watched</Link>
            </li>
            <li>
              <Link to='/toprated'>Top Rated</Link>
            </li>
            <li>
              <Link to='/add' className='btn search-btn'>
                Search for Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
