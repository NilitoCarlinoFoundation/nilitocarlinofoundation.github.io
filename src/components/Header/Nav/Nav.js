import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.css';

export default function Nav() {
  return (
    <nav className="Nav">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/story">Nilito</NavLink>
        </li>

        <li>
          <NavLink to="/foundation">Foundation</NavLink>
        </li>

        <li>
          <NavLink to="/scholarships">Scholarships</NavLink>
        </li>

        <li>
          <NavLink to="/sponsors">Contributors</NavLink>
        </li>

        <li>
          <NavLink to="/events">Events</NavLink>
        </li>

        <li>
          <NavLink to="/photos">Photos</NavLink>
        </li>

        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
