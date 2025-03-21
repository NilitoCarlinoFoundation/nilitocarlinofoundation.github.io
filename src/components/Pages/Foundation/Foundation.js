import React from 'react';

import NickAndRocco from '../../../assets/images/Nick_Rocco_II.png';
import './Foundation.css';

export default function Foundation() {
  return (
    <div className="Foundation">
      <div className="content">
        <h1>Nilito Carlino Foundation</h1>
        <div className="content-text">
          Nick was an outgoing, talented, and kind young man who graduated from
          Attleboro High School. The amount of time Nick had with us was
          terribly short. Although the void created by his absence will never be
          filled, the number of people he touched with his love, generosity, and
          support was inspirational.<br></br>
          <br></br>
          The Nilito Carlino Foundation was established to raise funds for an
          annual academic scholarship for students pursuing a career in Culinary
          Arts and Business Management. Nick loved to cook and was enthusiastic
          about his culinary studies, having simultaneously attended the
          Culinary Arts and Business Management program at Johnson and Wales
          University in Providence, RI while a student at Attleboro High School.{' '}
          <br></br>
          <br></br>
          Nick's family hopes to continue his legacy through encouraging and
          supporting others in their educational pursuits. For more information, please listen to{' '}
          <a
              className="text-link"
              href="https://podcasts.apple.com/us/podcast/a-fathers-mission-for-his-son-nilito-carlino-foundation/id1751037582?i=1000671762962"
              target="_blank"
              rel="noopener noreferrer"
              >
                A Father's Mission for His Son
          </a>
          {' '}on the <i>The Life in Attleboro Podcast</i>.
        </div>
      </div>

      <div className="content-image">
        <img src={NickAndRocco} alt="Nick and Rocco" />
      </div>
    </div>
  );
}
