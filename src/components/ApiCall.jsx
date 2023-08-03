import React, { useState } from 'react';
import '../styles/api-call.css';

const apiKey = import.meta.env.VITE_TMDB_KEY;
const token = import.meta.env.VITE_TMDB_TOKEN;

const ApiCall = () => {
  const [movies, setMovies] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchMovies = () => {
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button onClick={fetchMovies}>Call Movie Phone</button>
      <div className='movie-block'>
        {movies.map((movie) => (
          <div key={movie.id} className='single-movie'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='movie-poster'
            />
            <h2 className='movie-title'>{movie.title}</h2>
            <p className='movie-overview'>{movie.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiCall;
