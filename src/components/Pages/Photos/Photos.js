import React from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Photos.css';

import { Carousel } from 'react-responsive-carousel';

export default function Photos() {
    return (
        <div className="Photos">
          <div className="content">
              <Carousel infiniteLoop useKeyboardArrows autoPlay dynamicHeight>
                    <div>
                      <img src="/Carousel1.JPG" alt="Nick Flag"/>
                    </div>
                    <div>
                      <img src="/Carousel2.JPG" alt="Nick Throwing"/>
                    </div>
                    <div>
                      <img src="/Carousel3.JPG" alt="Nick TC"/>
                    </div>
                    <div>
                      <img src="/Carousel4.JPG" alt="Nick Baby"/>
                    </div>
                    <div>
                      <img src="/Carousel5.JPG" alt="Nick Headhshot"/>
                    </div>
                    <div>
                      <img src="/Carousel6.JPG" alt="Nick Black Suit 1"/>
                    </div>
                    <div>
                      <img src="/Carousel7.JPG" alt="Nick Blue Suit"/>
                    </div>
                    <div>
                      <img src="/Carousel8.JPG" alt="Nick on Boat"/>
                    </div>
                    <div>
                      <img src="/Carousel9.JPG" alt="Nick Black Suit 2" />
                    </div>
              </Carousel>
        </div>
      </div>
    );
}
