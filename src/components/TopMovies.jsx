import React, { useState, useEffect } from 'react';
import Modal from '../modals/Modal';
import MovieFetcher from './MovieFetcher';

const token = import.meta.env.VITE_TMDB_TOKEN;

const TopMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [providersData, setProvidersData] = useState({});

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const updateProvidersData = (movieId, data) => {
    setProvidersData((prevData) => ({
      ...prevData,
      [movieId]: data,
    }));
  };

  const fetchTopMovies = () => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTopMovies();
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
            updateProvidersData={updateProvidersData}
          />
        )}
      </div>

      <p className='attribute'>Provider Data supplied by JustWatch</p>
      {selectedMovie && (
        <MovieFetcher
          movieId={selectedMovie.id}
          options={options}
          updateProvidersData={updateProvidersData}
        />
      )}
    </div>
  );
};

export default TopMovies;
