import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navigation.css';
import Hamburger from './Hamburger';

const Navigation = () => {
  const [mobileIsOpen, setMobileIsOpen] = useState(false);

  const toggleMenu = () => {
    setMobileIsOpen((open) => !open);
  };
  const closeMenu = () => {
    setMobileIsOpen(false);
  };
  return (
    <header className='nav'>
      <div className='container'>
        <div className='inner-content'>
          <div className='site-title'>
            <Link to='/' className='site-title' onClick={closeMenu}>
              WatchWise
            </Link>
          </div>

          {/* <input type='checkbox' className='toggle-menu' /> */}
          <div className='hamburger' onClick={toggleMenu}>
            <Hamburger mobileIsOpen={mobileIsOpen} />
          </div>

          <ul
            className={`nav-locations ${mobileIsOpen ? 'mobile-is-open' : ''}`}
          >
            <li>
              <Link to='/watchList' onClick={closeMenu}>
                Watch List
              </Link>
            </li>
            <li>
              <Link to='/watched' onClick={closeMenu}>
                Watched
              </Link>
            </li>
            <li>
              <Link to='/toprated' onClick={closeMenu}>
                Top Rated
              </Link>
            </li>
            <li>
              <Link to='/add' onClick={closeMenu}>
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
