import React from 'react';
import '../styles/hamburger.css';

const Hamburger = ({ mobileIsOpen }) => {
  return (
    <div className={`hamburger-menu ${mobileIsOpen ? 'mobile-is-open' : ''}`}>
      <div className='burger burger1' />
      <div className='burger burger2' />
      <div className='burger burger3' />
    </div>
  );
};

export default Hamburger;
