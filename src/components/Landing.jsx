import React from 'react';
import Trending from './TopRated';
import Add from './Add';

const Landing = ({}) => {
  return (
    <div>
      <h1>Watch Wise</h1>
      <h2>The Philosopher of Movie Night</h2>
      <h3>
        Embrace movie serenity with WatchWise as your spiritual companion in
        managing and discovering films.
      </h3>
      {/* <Trending /> */}
      <Add />
    </div>
  );
};

export default Landing;
