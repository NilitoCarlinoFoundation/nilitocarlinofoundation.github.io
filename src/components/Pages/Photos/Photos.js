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
                      <img src="/carousel/01_nick_flag.jpg" alt="Nick Flag"/>
                    </div>
                    <div>
                      <img src="/carousel/02_nick_throw.jpg" alt="Nick Throwing"/>
                    </div>
                    <div>
                      <img src="/carousel/03_nick_tc.jpg" alt="Nick TC"/>
                    </div>
                    <div>
                      <img src="/carousel/04_nick_baby.jpg" alt="Nick Baby"/>
                    </div>
                    <div>
                      <img src="/carousel/05_nick_headshot.jpg" alt="Nick Headshot"/>
                    </div>
                    <div>
                      <img src="/carousel/06_farmers.jpg" alt="Farmers Market"/>
                    </div>
                    <div>
                      <img src="/carousel/07_nick_blacksuit.jpg" alt="Nick Black Suit 1"/>
                    </div>
                    <div>
                      <img src="/carousel/08_nick_bluesuit.jpg" alt="Nick Blue Suit"/>
                    </div>
                    <div>
                      <img src="/carousel/09_nick_boat.jpg" alt="Nick on Boat"/>
                    </div>
                    <div>
                      <img src="/carousel/10_nick_blacksuitii.jpg" alt="Nick Black Suit 2" />
                    </div>
              </Carousel>
        </div>
      </div>
    );
}
