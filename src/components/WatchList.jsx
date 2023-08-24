import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import '../styles/watch-list.css';
import Modal from '../modals/Modal';

const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);
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
              {/* <p className='movie-overview'>{movie.overview}</p> */}
              {/* <p className='movie-release-date'>
                  Release Date: {movie.release_date}
                </p> */}
              <div className='movie-details'>
                <p className='movie-release'>
                  {movie.release_date.substring(0, 4)}
                </p>
                <p className='movie-rating'>Rating: {movie.vote_average}</p>
              </div>
              <div className='provider-container'>
                {movie.providers &&
                  movie.providers.map((provider, index) => (
                    <div key={index} className='provider'>
                      <img
                        src={provider.logo}
                        alt={provider.name}
                        className='provider-logo'
                      />
                    </div>
                  ))}
              </div>
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
