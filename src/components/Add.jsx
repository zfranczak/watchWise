import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import MovieFetcher from './MovieFetcher'; // Import the new component

const token = import.meta.env.VITE_TMDB_TOKEN;

const Add = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const { watchlist, addMovieToWatchlist } = useContext(GlobalContext);

  const onChange = (e) => {
    setQuery(e.target.value);
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchResults();
    }
  };

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchResults = () => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      })
      .catch((err) => console.error(err));
  };

  const isMovieInWatchlist = (movieId) => {
    return watchlist.some((watchlistMovie) => watchlistMovie.id === movieId);
  };

  return (
    <div className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Search for a Movie'
              value={query}
              onChange={onChange}
              onKeyPress={onKeyPress}
            />
          </div>
          <div className='movie-block'>
            {results.map((movie) => (
              <div key={movie.id} className='single-movie'>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className='movie-poster'
                />
                <h2 className='movie-title'>{movie.title}</h2>
                <p className='movie-release'>
                  {movie.release_date.substring(0, 4)}
                </p>
                <p className='movie-rating'>Rating: {movie.vote_average}</p>
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
                {/* Pass the movie ID to MovieFetcher */}
                <MovieFetcher movieId={movie.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
