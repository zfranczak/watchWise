import React from 'react';
import '../styles/star-rating.css';

const StarRating = ({ tmdbRating }) => {
  // Calculate the star rating based on the TMDB rating (0 to 10 scale)
  const maxStars = 5;
  const starRating = tmdbRating / 2;

  // Generate stars with the appropriate class to style them
  const stars = Array.from({ length: maxStars }, (_, index) => (
    <i
      key={index}
      className={`my-star star-${index + 1} ${
        index < starRating ? 'is-active' : ''
      }`}
    ></i>
  ));

  return (
    <div>
      <p className='star-rating'>{stars}</p>
    </div>
  );
};

export default StarRating;
