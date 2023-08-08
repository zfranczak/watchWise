import React, { useState } from 'react';
import '../styles/api-call.css';

const apiKey = import.meta.env.VITE_TMDB_KEY;
const token = import.meta.env.VITE_TMDB_TOKEN;

const ApiCall = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [providers, setProviders] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  };

  const fetchMovies = () => {
    // Fetch trending movies
    fetch(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => console.error(err));
  };

  const fetchProviders = (movieId) => {
    // Fetch movie providers for the selected movie
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
      options
    )
      .then((response) => response.json())
      .then((data) => {
        const usProviders = data.results.US; // Get providers for the US

        if (usProviders && usProviders.link) {
          const providerLogos = usProviders.flatrate.map((provider) => ({
            logo: `https://image.tmdb.org/t/p/original${provider.logo_path}`,
            name: provider.provider_name,
          }));

          setProviders(providerLogos);
        } else {
          setProviders([]);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button onClick={fetchMovies}>See Today's Trending Movies</button>

      <div className='movie-block'>
        {movies.map((movie) => (
          <div key={movie.id} className='single-movie'>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className='movie-poster'
            />
            <h2 className='movie-title'>{movie.title}</h2>

            {/* Button to fetch and display movie providers */}
            <button
              onClick={() => {
                setSelectedMovie(movie);
                fetchProviders(movie.id);
              }}
            >
              Get Providers
            </button>

            {/* Display providers for the selected movie */}
            {providers.map((provider, index) => (
              <div key={index} className='provider'>
                <img
                  src={provider.logo}
                  alt={provider.name}
                  className='provider-logo'
                />
                <p className='provider-name'>{provider.name}</p>
              </div>
            ))}

            {/* Debugging */}
            {console.log(movie)}
            {console.log('Provider : ')}
            {providers.map((provider) => console.log(provider.name))}

            {/* Additional provider block (commented out) */}
            {/* <div className='provider-block'>
                {providers.map((provider) => (
                    <div key='/' className='provider'>
                        <p className='provider-name'>{provider.}</p>
                    </div>
                ))}
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiCall;
