import React from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

/* Here's where I can grab FB and star icons*/
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';

import Header from './Header/Header';
import Home from './Pages/Home';
import Story from './Pages/Story';
import Foundation from './Pages/Foundation';
import Sponsors from './Pages/Sponsors';
import Events from './Pages/Events/Events';
import Contact from './Pages/Contact';
import Footer from './Footer/Footer';

library.add(fab, faCheckSquare, faCoffee)
/*end of FB and star icons*/

function App() {
  return (
    <Router>
      <div className="App">
        <Header />  
          {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/foundation">
            <Foundation />
          </Route>
          <Route path="/story">
            <Story />
          </Route>
          <Route path="/">
            <Home />
          </Route>
         
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
