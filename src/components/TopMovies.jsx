import React, { useState, useEffect, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Modal from '../modals/Modal';
import MovieFetcher from './MovieFetcher';
import StarRating from './StarRating';

const token = import.meta.env.VITE_TMDB_TOKEN;

const TopMovies = () => {
  const { watchlist, addMovieToWatchlist } = useContext(GlobalContext);

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
    document.body.classList.add('no-scroll');
  };

  const closeMovieDetails = () => {
    setSelectedMovie(null);
    document.body.classList.remove('no-scroll');
  };

  const isMovieInWatchlist = (movieId) => {
    return watchlist.some((watchlistMovie) => watchlistMovie.id === movieId);
  };

  return (
    <div>
      <div className='movie-block'>
        {movies.map((movie) => (
          <div key={movie.id} className='single-movie'>
            <div className='movie-container'>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className='movie-poster'
                onClick={() => openMovieDetails(movie)}
              />
            </div>
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-rating'>
              TMDB Rating: {movie.vote_average.toFixed(1)}
              <StarRating tmdbRating={movie.vote_average} />
            </p>
            <div className='controls'>
              {isMovieInWatchlist(movie.id) ? (
                <button className='btn' disabled>
                  Added to Watchlist
                </button>
              ) : (
                <button
                  className='btn'
                  onClick={() => addMovieToWatchlist(movie)}
                >
                  Add to Watchlist
                </button>
              )}
            </div>
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
