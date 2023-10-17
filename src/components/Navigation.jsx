import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import Hamburger from './Hamburger';

const Navigation = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const toggleMenu = () => {
    setMobileIsOpen((open) => !open);
    console.log('Mobile Menu is Open');
  };
  return (
    <header className='nav'>
      <div className='container'>
        <div className='inner-content'>
          <div className='site-title'>
            <Link to='/' className='site-title'>
              WatchWise
            </Link>
          </div>

          {/* <input type='checkbox' className='toggle-menu' /> */}
          <div className='hamburger' onClick={toggleMenu}>
            <Hamburger />
          </div>

          <ul
            className={`nav-locations ${mobileIsOpen ? 'mobile-is-open' : ''}`}
          >
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
              <Link to='/add'>Search for Movies</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
