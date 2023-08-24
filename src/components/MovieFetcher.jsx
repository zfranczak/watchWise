import { useState, useEffect } from 'react';

const MovieFetcher = ({ movieId }) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      // Fetch movie details
      const movieResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        options
      );
      const movieData = await movieResponse.json();

      // Fetch providers data
      const providersResponse = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/watch/providers`,
        options
      );
      const providersData = await providersResponse.json();

      // Process providers data and combine with movie details
      const usProviders = providersData.results.US;
      if (usProviders && usProviders.link) {
        const providerLogos = usProviders.flatrate.map((provider) => ({
          logo: `https://image.tmdb.org/t/p/original${provider.logo_path}`,
          name: provider.provider_name,
        }));

        const movieWithProviders = {
          ...movieData,
          providers: providerLogos,
        };

        setMovieData(movieWithProviders);
      } else {
        setMovieData(movieData);
      }
    };

    fetchMovieData();
  }, [movieId]);

  return movieData;
};

export default MovieFetcher;
