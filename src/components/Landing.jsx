import React from 'react';
// import Trending from './TopRated';
import Add from './Add';
import TopMovies from './TopMovies';

const Landing = ({}) => {
  return (
    <div>
      <h1>Watch Wise</h1>
      <h2>Movie Night Made Easy</h2>
      <h3>
        Embrace movie night with WatchWise as your companion in managing and
        discovering films.
      </h3>
      {/* <Trending /> */}
      <Add />
      <h2>See What's Popular Right Now!</h2>
      <TopMovies />
    </div>
  );
};

export default Landing;
