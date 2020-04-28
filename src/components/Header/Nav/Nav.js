import React from 'react';
import { Link } from "react-router-dom";

export default function Nav() {
	return (
		  <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/story">Nilito's Story</Link>
            </li>
            <li>
              <Link to="/foundation">Foundation</Link>
            </li>
              <li>
              <Link to="/sponsors">Contributors/Sponsors</Link>
            </li>
              <li>
              <Link to="/events">Events</Link>
            </li>
              <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
    );
}