import React from 'react';
import ApiCall from './ApiCall';

const TopRated = () => {
  return (
    <div>
      <div className='section-title'>
        <h1>Top Rated Movies</h1>
        <ApiCall />
      </div>
    </div>
  );
};

export default TopRated;
