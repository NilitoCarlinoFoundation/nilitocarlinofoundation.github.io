import React from 'react';

import Scholarship from '../../../assets/images/Scholarships2026.jpeg';
import './Scholarships.css';

export default function Story() {
  return (
    <div className="Scholarships">
      <div className="content-image">
        <img src={Scholarship} alt="2026 Scholarship Recipients" />
      </div>

      <div className="content">
        <h1>Scholarship Recipients</h1>
        <div className="content-text">
         $2,500 scholarship recipients: Talyn Azzinaro, Maia Hoban, and Samantha Quirk
          <p>
          We are thrilled to announce that on May 28, 2026, the foundation awarded <i>three</i> scholarships at Attleboro High School.
          This season's recipients are Talyn Azzinaro, Maia Hoban, and Samantha Quirk.
          Congratulations, to all of you!
          </p>
          <p>
          <b>Past Recipients:</b>
          </p>
          <p>
            <ul>
              <li>2025 - Sophia Mastandreau & Sophia Correia: $2500 each, Johnson & Wales University</li>
              <li>2023 - Alexis MacDonald & Miracle Arce: $2500 each, Johnson & Wales University</li>
              <li>2022 - Felicity Norton: $2500, Johnson & Wales University</li>
            </ul>
          </p>
        </div>
      </div>
     </div>
  );
}
