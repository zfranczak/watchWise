import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/watch-list.css';
import Modal from '../modals/Modal';

const WatchList = ({ providersData }) => {
  const { watchlist, removeMovieFromWatchlist } = useContext(GlobalContext); // Import the removeMovieFromWatchlist function
  const [selectedMovie, setSelectedMovie] = useState(null);

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div>
      <h1>Watch List</h1>
      <ul>
        {watchlist.map((movie) => (
          <li
            key={movie.id}
            className='watchlist-movie'
            onClick={() => openMovieDetails(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='watchlist-movie-poster'
            />
            <div className='movie-container'>
              <h2 className='movie-title'>{movie.title}</h2>
              <div className='movie-details'>
                <p className='movie-release'>
                  {movie.release_date.substring(0, 4)}
                </p>
                <p className='movie-rating'>Rating: {movie.vote_average}</p>
              </div>
              <div className='provider-container'>
                {providersData[movie.id] &&
                  providersData[movie.id].results.US.flatrate.map(
                    (provider, index) => (
                      <div key={index} className='provider'>
                        <img
                          src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                          alt={provider.provider_name}
                          className='provider-logo'
                        />
                      </div>
                    )
                  )}
              </div>
            </div>
            <button
              className='remove-button'
              onClick={() => removeMovieFromWatchlist(movie.id)} // Call the function here
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

export default WatchList;
