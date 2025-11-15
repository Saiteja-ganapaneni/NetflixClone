import React from 'react';
import '../moviecards.css';

export default function MovieCard({ movie }) {
  return (
    <div className="movieCard">
      <img className="movieCard__image" src={movie.backdrop} alt={movie.title} />
      <div className="movieCard__info">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
