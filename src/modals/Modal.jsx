import React, { useState, useEffect, useContext } from 'react';
import '../styles/modal.css';
import { GlobalContext } from '../context/GlobalState';
import StarRating from '../components/StarRating';
import MovieCredits from '../components/MovieCredits';

const Modal = ({ isOpen, onClose, movie, updateProvidersData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [credits, setCredits] = useState([]);
  const { watchlist, addMovieToWatchlist, removeMovieFromWatchlist } =
    useContext(GlobalContext);

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
      className={`modal modal-overlay ${isVisible ? 'visible' : ''}`}
      onClick={handleOverlayClick}
    >
      <div className='modal-content'>
        <button className='close-button' onClick={closeModal}>
          Close
        </button>

        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className='movie-poster'
          />
        ) : (
          <div className='placeholder-poster'>
            <img
              src='/no-poster.png'
              alt='No Poster Available'
              className='movie-poster'
            />
          </div>
        )}
        <h2>{movie.title}</h2>
        <h3>{movie.overview}</h3>
        <MovieCredits credits={credits} movieId={movie.id} />
        <ul>
          Credits
          <li class-name='credits'>{movie.credits}</li>
        </ul>
        <p>{movie.release_date.substring(0, 4)}</p>

        {isMovieInWatchlist ? (
          <div className='controls'>
            <p>This movie is already in your watchlist.</p>
            <button
              className='remove-button'
              onClick={() => removeMovieFromWatchlist(movie.id)}
            >
              Remove from Watchlist
            </button>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default Modal;
