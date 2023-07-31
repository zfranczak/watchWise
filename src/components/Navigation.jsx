import React from 'react';
import '../styles/navigation.css';

const Navigation = () => {
  return (
    <nav className='nav'>
      <a href='/' className='site-title'>
        Watch
        <a href='/' className='site-title'>
          Wise
        </a>
      </a>

      <ul className='nav-locations'>
        <li>
          <a href='/'>My Movie List</a>
        </li>
        <li>
          <a href='/'>Recommendations</a>
        </li>
        <li>
          <a href='/'>Search</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
