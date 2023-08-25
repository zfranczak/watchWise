import React, { useState, useEffect } from 'react';

const MovieFetcher = ({ movieId, options }) => {
  const [movieData, setMovieData] = useState(null);
  const [providersData, setProvidersData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      // Fetch movie details
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );
      const movieData = await movieResponse.json();
      setMovieData(movieData);

      // Fetch providers data
      const providersResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
        options
      );
      const providersData = await providersResponse.json();
      setProvidersData(providersData);
    };

    fetchMovieData();
  }, [movieId, options]);

  return (
    <div>
      {movieData && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt={movieData.title}
            className='movie-poster'
          />
          <h2 className='movie-title'>{movieData.title}</h2>
          {/* Render other movie details here */}
        </div>
      )}

      {providersData && providersData.results.US && (
        <div className='provider-container'>
          {providersData.results.US.flatrate.map((provider, index) => (
            <div key={index} className='provider'>
              <img
                src={`https://image.tmdb.org/t/p/original${provider.logo_path}`}
                alt={provider.provider_name}
                className='provider-logo'
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieFetcher;
