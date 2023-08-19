import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <h1>Watch List</h1>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
