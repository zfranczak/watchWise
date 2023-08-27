import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Modal from '../modals/Modal';

const Watched = () => {
  const { watched, moveMovieToWatchlist, removeMovieFromWatchlist } =
    useContext(GlobalContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Watched Movies</h1>
      <ul>
        {watched.map((movie) => (
          <li key={movie.id} className='watched-movie'>
            <div className='movie-info' onClick={() => openMovieDetails(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='watched-movie-poster'
              />
              <div className='movie-details'>
                <h2 className='movie-title'>{movie.title}</h2>
                <p className='movie-release'>
                  {movie.release_date.substring(0, 4)}
                </p>
                <p className='movie-rating'>Rating: {movie.vote_average}</p>
              </div>
            </div>
            <button
              className='move-to-watchlist-button'
              onClick={() => moveMovieToWatchlist(movie.id)} // Use the correct function
            >
              Move to Watchlist
            </button>
            <button
              className='remove-button'
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {selectedMovie && (
        <Modal
          isOpen={selectedMovie !== null}
          onClose={() => setSelectedMovie(null)}
          movie={selectedMovie}
        />
      )}
    </div>
  );
};

export default Watched;
