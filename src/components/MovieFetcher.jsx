import React, { useState, useEffect } from 'react';

const MovieFetcher = ({ movieId, options, updateProvidersData }) => {
  const [movieDetails, setMovieDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        // Fetch movie data
        const movieResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
          options
        );
        const movieData = await movieResponse.json();

        // Fetch provider data
        const providerResponse = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/watch/providers?language=en-US`,
          options
        );
        const providerData = await providerResponse.json();

        // Update providers data using the provided function
        updateProvidersData(movieId, providerData);

        setMovieDetails(movieData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMovieData();
  }, [movieId, options, updateProvidersData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{movieDetails.title}</h2>
    </div>
  );
};

export default MovieFetcher;
