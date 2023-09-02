import React from 'react';

import FirstScholarship from '../../../assets/images/ScholarshipRecipientYearTwo.png';
import './Scholarships.css';

export default function Story() {
  return (
    <div className="Scholarships">
      <div className="content-image">
        <img src={FirstScholarship} alt="Second Scholarship Recipient" />
      </div>

      <div className="content">
        <h1>Scholarship Recipients</h1>
        <div className="content-text">
         $2,500 scholarship recipients: Alexis MacDonald and Miracle Arce
          <p>
          We are so pleased to announce that the foundation awarded <i>two</i> scholarships this season on May 18th, 2023 at Attleboro High School
          to Alexis MacDonald and Miracle Arce who will be attending Johnson & Wales University to study Bakery/Pastry in the fall.
          Congratulations, Alexis and Miracle!
          </p>
          <p>
          <b>Past Recipients:</b>
          </p>
          <p>
          2022 - Felicity Norton: $2500, Johnson & Wales University
          </p>
        </div>
      </div>
     </div>
  );
}
