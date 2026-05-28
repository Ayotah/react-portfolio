import { NavLink } from 'react-router-dom';
import './Navbar.css';
import React from 'react';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        React<span>Portfolio</span>
      </div>

      <ul className="navbar__links" style={{ display: open ? 'flex' : '' }}>
        <li>
          <NavLink to="/" end className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}>
            <i className="bi bi-house"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}>
            <i className="bi bi-person"></i> About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}>
            <i className="bi bi-briefcase"></i> Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}>
            <i className="bi bi-envelope"></i> Contact
          </NavLink>
        </li>
      </ul>

      <a href="/contact" className="navbar__cta">Hire me</a>

      <button className="navbar__toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        <i className={open ? 'bi bi-x-lg' : 'bi bi-list'}></i>
      </button>
    </nav>
  );
}