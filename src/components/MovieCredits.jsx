import React, { useState, useEffect } from 'react';
import '../styles/movie-credits.css';

const token = import.meta.env.VITE_TMDB_TOKEN;

const MovieCredits = ({ movieId }) => {
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${token}`, // Replace with your actual API key
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
          options
        );
        const data = await response.json();
        setCredits(data.cast);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  return (
    <div>
      <strong>Credits:</strong>
      <ul className='cast-list'>
        {credits.map((actor) => (
          <li className='cast-actor' key={actor.id}>
            {actor.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCredits;
