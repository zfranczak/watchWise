import React, { useState, useEffect } from 'react';
import '../styles/modal.css';

const Modal = ({ isOpen, onClose, movie }) => {
  const [isVisible, setIsVisible] = useState(false);

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
        <div className='controls'>
          <button className='btn'>Add to Watchlist</button>
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
                {/* <p className='provider-name'>{provider.name}</p> */}
              </div>
            ))}
        </div>
        {/* Additional movie details */}
      </div>
    </div>
  );
};

export default Modal;
