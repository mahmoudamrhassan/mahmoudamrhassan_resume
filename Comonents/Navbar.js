import React  from 'react';
import '@/public/header.css';

export default function Header() {


  return (
<header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          <a href="#" className="navbar-brand">
            <img src="./imges/img.jpeg" alt="Logo" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            // onClick={handleToggle}
            aria-controls="navbarContent"
            // aria-expanded={!isNavbarCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            // className={`collapse navbar-collapse ${!isNavbarCollapsed ? 'show' : ''}`}
            id="navbarContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#projects" className="nav-link">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#journey" className="nav-link">Journey</a>
              </li>
              <li className="nav-item">
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
