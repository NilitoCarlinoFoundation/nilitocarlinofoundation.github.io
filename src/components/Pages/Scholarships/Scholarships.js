import React from 'react';

import Scholarship from '../../../assets/images/Scholarships2025.jpeg';
import './Scholarships.css';

export default function Story() {
  return (
    <div className="Scholarships">
      <div className="content-image">
        <img src={Scholarship} alt="2025 Scholarship Recipients" />
      </div>

      <div className="content">
        <h1>Scholarship Recipients</h1>
        <div className="content-text">
         $2,500 scholarship recipients: Sophia Mastandreau and Sophia Correia
          <p>
          We are thrilled to announce that on May 15, 2025, the foundation awarded <i>two</i> scholarships at Attleboro High School.
          This season's recipients are Sophia Mastandreau and Sophia Correia, who will both be attending Johnson & Wales University in the fall.
          Congratulations, to you both!
          </p>
          <p>
          <b>Past Recipients:</b>
          </p>
          <p>
            <ul>
              <li>2022 - Felicity Norton: $2500, Johnson & Wales University</li>
              <li>2023 - Alexis MacDonald and Miracle Arce: $2500 each, Johnson & Wales University</li>
            </ul>
          </p>
        </div>
      </div>
     </div>
  );
}
