import React, { useState, useEffect } from 'react';
import '../styles/api-call.css';
import Modal from '../modals/Modal';
import MovieFetcher from './MovieFetcher'; // Import the new component

const apiKey = import.meta.env.VITE_TMDB_KEY;
const token = import.meta.env.VITE_TMDB_TOKEN;

const ApiCall = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchMovies = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const openMovieDetails = (movie) => {
    setSelectedMovie(movie);
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
  };

  return (
    <div>
      <div className='movie-block'>
        {movies.map((movie) => (
          <div
            key={movie.id}
            className='single-movie'
            onClick={() => openMovieDetails(movie)}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='movie-poster'
            />
            <h2 className='movie-title'>{movie.title}</h2>
          </div>
        ))}
        {selectedMovie && (
          <Modal
            isOpen={selectedMovie !== null}
            onClose={closeMovieDetails}
            movie={selectedMovie}
          />
        )}
      </div>

      <p className='attribute'>Provider Data supplied by JustWatch</p>
    </div>
  );
};

export default ApiCall;
