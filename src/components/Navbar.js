import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav__left">
        <div className="logo">NETFLIX</div>
      </div>
      <div className="nav__right">
        <button className="btn">Kids</button>
        <img className="avatar" alt="avatar" src="https://i.pravatar.cc/40" />
      </div>
    </nav>
  );
}