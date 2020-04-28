import React from 'react';

import Nav from './Nav/Nav';

export default function Header() {
	return (
		<header className="App-header">
			<Nav /> 
        	<img src="spoons.png" className="App-spoons" alt="spoons" />
        	<img src="Nick_logo.png" className="App-logo" alt="Nick_logo" />

       		<a
         	 	className="App-link"
          		href="https://reactjs.org"
         		target="_blank"
          		rel="noopener noreferrer"
        	>
          		Marc is a total Joba
        	</a>
      	</header>
    );
}