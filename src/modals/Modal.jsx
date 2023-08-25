import React, { useState, useEffect, useContext } from 'react';
import '../styles/modal.css';
import { GlobalContext } from '../context/GlobalState';

const Modal = ({ isOpen, onClose, movie }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { watchlist, addMovieToWatchlist } = useContext(GlobalContext);

  useEffect(() => {
    setIsVisible(isOpen);
  }, [isOpen]);

  const closeModal = () => {
    setIsVisible(false);
    onClose();
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  const isMovieInWatchlist = watchlist.some(
    (watchlistMovie) => watchlistMovie.id === movie.id
  );

  const handleAddToWatchlist = () => {
    if (!isMovieInWatchlist) {
      addMovieToWatchlist(movie);
    }
  };

  return (
    <div
      className={`modal ${isVisible ? 'visible' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className='modal-content'>
        <button className='close-button' onClick={closeModal}>
          Close
        </button>

        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className='movie-poster'
        />
        <h2>{movie.title}</h2>
        <h3>{movie.overview}</h3>
        <p>{movie.release_date.substring(0, 4)}</p>

        {isMovieInWatchlist ? (
          <p>This movie is already in your watchlist.</p>
        ) : (
          <div className='controls'>
            <button className='btn' onClick={handleAddToWatchlist}>
              Add to Watchlist
            </button>
          </div>
        )}

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
          {/* {console.log(movie.providers)} */}
        </div>
        {/* Additional movie details */}
      </div>
    </div>
  );
};

export default Modal;
