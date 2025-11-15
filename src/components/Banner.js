import React from 'react';
import './Banner.css';

export default function Banner({ movie }) {
  return (
    <header className="banner" style={{ backgroundImage: `url(${movie.backdrop})` }}>
      <div className="banner__contents">
        <h1 className="banner__title">{movie.title}</h1>
        <p className="banner__overview">{movie.overview}</p>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button banner__button--outline">My List</button>
        </div>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}