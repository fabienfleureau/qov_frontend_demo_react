import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <div className="nav-container">
        <div className="nav-brand">Claude Code</div>
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
          <NavLink to="/features" className={({ isActive }) => isActive ? 'active' : ''}>
            Features
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
