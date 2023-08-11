import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <header className='nav'>
      <div className='container'>
        <div className='inner-content'>
          <div className='site-title'>
            <Link to='/'>Watch Wise</Link>
          </div>
          <ul className='nav-locations'>
            <li>
              <Link to='/watchList'>My Movie Watch List</Link>
            </li>
            <li>
              <Link to='/watched'>Watched</Link>
            </li>
            <li>
              <Link to='/trending'>Trending</Link>
            </li>
            <li>
              <Link to='/add' className='btn'>
                Add
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
