import React from 'react';
import { NavLink } from "react-router-dom";

import './Nav.css';

export default function Nav() {
	return (
		  <nav className="Nav">
        <ul>
          <li>
            <NavLink to="/" exact>Home</NavLink>
          </li>

          <li>
            <NavLink to="/story">Nilito's Story</NavLink>
          </li>

          <li>
            <NavLink to="/foundation">Foundation</NavLink>
          </li>

          <li>
            <NavLink to="/sponsors">Contributors/Sponsors</NavLink>
          </li>

          <li>
            <NavLink to="/events">Events</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
      </nav>
  );
}