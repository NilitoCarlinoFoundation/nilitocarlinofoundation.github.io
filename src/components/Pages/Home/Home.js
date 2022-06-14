import React from 'react';

import './Home.css';
import NickChef from '../../../assets/images/Nick_Chef_BW.png';
import Donate from '../../Header/Donate/Donate';

export default function Home() {
  return (
    <div className="Home">
      <div className="content">
        <div>
          <h1>The Nilito Carlino Foundation</h1>
          <div className="content-text">
            The Nilito “Nick” Carlino Foundation is a volunteer-led 501(c)(3)
            charitable organization created in the wake of Nick's untimely
            death. <br></br>
            <br></br>
            Our mission is to raise funds for an annual academic Culinary Arts
            Scholarship to be awarded to a graduate of Attleboro High School as
            well as to provide financial support to the{' '}
            <a
              className="text-link"
              // href="http://attleborotrack.com/" link broken as of May 2022
              href="https://jillianellis3.wixsite.com/attleborotrack"
              target="_blank"
              rel="noopener noreferrer"
            >
              Attleboro High School Track & Field program
            </a>{' '}
            and{' '}
            <a
              className="text-link"
              href="https://www.facebook.com/attleborobestbuddies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chapter of Best Buddies
            </a>
            .
          </div>
        </div>
        {/*Line 31 calls the component that's imported in line 4*/}
        <Donate />
      </div>

      <div className="content-image">
        <img src={NickChef} alt="Nick Chef" />
      </div>
    </div>
  );
}
