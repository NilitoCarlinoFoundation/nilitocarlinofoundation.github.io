import React from 'react';

import Nav from './Nav/Nav';
import Donate from './Donate/Donate';
import logo from '../../assets/images/Nick_logo.png';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <img src={logo} className="Header-logo" alt="Nick_logo" />
      <Nav />
      <Donate showSocialMedia />

      {/* 		<a
         	 	className="App-link"
          		href="https://reactjs.org"
         		target="_blank"
          		rel="noopener noreferrer"
        	>
          		Marc is a total Joba
        	</a>*/}
    </header>
  );
}
