import React, { useState, useEffect } from 'react';
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
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const moviesWithProviders = data.results.map((movie) => {
          fetchProviders(movie.id); // Fetch providers for each movie
          return movie;
        });

        setMovies(moviesWithProviders);
      })
      .catch((err) => console.error(err));
  };

  const fetchProviders = (movieId) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const usProviders = data.results.US;

        if (usProviders && usProviders.link) {
          const providerLogos = usProviders.flatrate.map((provider) => ({
            logo: `https://image.tmdb.org/t/p/original${provider.logo_path}`,
            name: provider.provider_name,
          }));

          setMovies((prevMovies) => {
            return prevMovies.map((movie) => {
              if (movie.id === movieId) {
                return {
                  ...movie,
                  providers: providerLogos,
                };
              }
              return movie;
            });
          });
        }
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMovies(); // Fetch movies and providers on component mount
  }, []);

  return (
    <div>
      <div className='movie-block'>
        {movies.map((movie) => (
          <div key={movie.id} className='single-movie'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='movie-poster'
            />
            <h2 className='movie-title'>{movie.title}</h2>

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
          </div>
        ))}
      </div>
      <p className='attribute'>Provider Data supplied by JustWatch</p>
    </div>
  );
};

export default ApiCall;
