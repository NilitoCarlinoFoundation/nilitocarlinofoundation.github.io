import React from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import Home from './Pages/Home/Home';
import Story from './Pages/Story/Story';
import Foundation from './Pages/Foundation/Foundation';
import Sponsors from './Pages/Sponsors/Sponsors';
//import Sponsor from './Pages/Sponsors/Sponsor';
import Scholarships from './Pages/Scholarships/Scholarships';
import Events from './Pages/Events/Events';
import Photos from './Pages/Photos/Photos';
// import CarouselComponent from './Pages/Photos/Carousel.Component';
import Contact from './Pages/Contact/Contact';
import Footer from './Footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="wrapper">
          <Header />
          {/* A <Routes> looks through its children <Route>s and
             renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/contact" element={<Contact />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/scholarships" element={<Scholarships />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/story" element={<Story />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
