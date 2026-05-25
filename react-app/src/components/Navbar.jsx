import { NavLink } from 'react-router-dom';
import './Navbar.css';

import React from 'react';
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        React<span>Portfolio</span>
      </div>
      <div className="navbar__toggle">
        <i class="bi bi-list" onClick={toggleMobileMenu}></i>
      </div>
      <ul className="navbar__links">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => 'navbar__link' + (isActive ? ' active' : '')}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
