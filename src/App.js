import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Row from './components/Row';
import './App.css';

const sampleMovies = [
  {
    id: 1,
    title: "The Space Between",
    overview: "A gripping sci-fi adventure across galaxies.",
    backdrop: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 2,
    title: "City Lights",
    overview: "A city detective unravels a mystery under neon lights.",
    backdrop: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 3,
    title: "Ocean Whisper",
    overview: "A lyrical journey into the deep sea.",
    backdrop: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80"
  },
  {
    id: 4,
    title: "Mountain High",
    overview: "A tale of survival on a frozen summit.",
    backdrop: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&q=80"
  }
];

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner movie={sampleMovies[0]} />
      <div className="rows">
        <Row title="Trending Now" movies={sampleMovies} />
        <Row title="Top Picks" movies={sampleMovies.slice().reverse()} />
        <Row title="New Releases" movies={sampleMovies} />
      </div>
      <footer className="footer">This is a demo Netflix-style UI — no streaming or authentication included.</footer>
    </div>
  );
}