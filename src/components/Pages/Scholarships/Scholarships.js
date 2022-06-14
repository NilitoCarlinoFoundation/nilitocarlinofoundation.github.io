import React from 'react';

import FirstScholarship from '../../../assets/images/FirstScholarshipRecipient.png';
import './Scholarships.css';

export default function Story() {
  return (
    <div className="Scholarships">
      <div className="content-image">
        <img src={FirstScholarship} alt="First Scholarship Recipient" />
      </div>

      <div className="content">
        <h1>Scholarship Recipients</h1>
        <div className="content-text">
         $2,500 scholarship recipient, Felicity Norton
          <p>
          We are so pleased to announce that the foundation's first scholarship was awarded on May 19th, 2022 at Attleboro High School
          to Felicity Norlin who will be attending Johnson & Wales University in the fall. Congratulations, Felicity!
          </p>
          <p>
          Felicity is the first student to receive this scholarship in Nick's honor, helping to keep the memory of his legacy alive.
          </p>
        </div>
      </div>
    </div>
  );
}
