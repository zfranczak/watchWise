import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Modal from '../modals/Modal';

const Watched = () => {
  const { watched, moveMovieToWatchlist, removeMovieFromWatched } =
    useContext(GlobalContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Watched Movies</h1>
      <ul className='movie-list'>
        {watched.map((movie) => (
          <li key={movie.id} className='watched-movie movie-box'>
            {/* Movie Info */}
            <div className='movie-info' onClick={() => openMovieDetails(movie)}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='watched-movie-poster poster'
              />
              <div className='movie-details'>
                <h2 className='movie-title'>{movie.title}</h2>
                <p className='movie-release'>
                  {movie.release_date.substring(0, 4)}
                </p>
                <p className='movie-rating'>Rating: {movie.vote_average}</p>
              </div>
            </div>
            {/* Buttons */}
            <div className='buttons-container'>
              <button
                className='remove-button'
                onClick={() => removeMovieFromWatched(movie.id)}
              >
                Remove
              </button>
            </div>
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
