import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/watch-list.css';
import Modal from '../modals/Modal';

const WatchList = ({ providersData }) => {
  const { watchlist, removeMovieFromWatchlist, moveMovieToWatched } =
    useContext(GlobalContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>My Watch List</h1>
      <ul className='movie-list'>
        {watchlist.map((movie) => (
          <li key={movie.id} className='watchlist-movie movie-box'>
            <div className='movie-container'>
              <div
                className='movie-info'
                onClick={() => openMovieDetails(movie)}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className='watchlist-movie-poster poster'
                />
                <div className='second-container'>
                  <div className='movie-details'>
                    <h2 className='movie-title'>{movie.title}</h2>
                    <p className='movie-release'>
                      {movie.release_date.substring(0, 4)}
                    </p>
                    <p className='movie-rating'>
                      TMDB Rating: {movie.vote_average}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='buttons-container'>
              <button
                className='move-to-watched-button'
                onClick={() => moveMovieToWatched(movie.id)}
              >
                Move to Watched
              </button>
              <button
                className='remove-button'
                onClick={() => removeMovieFromWatchlist(movie.id)}
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

export default WatchList;
