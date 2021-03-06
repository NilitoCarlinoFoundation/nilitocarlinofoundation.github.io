import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Donate.css';

export default function Donate({ showSocialMedia = false }) {
  return (
    <div className="Donate">
      <a
        href="https://www.paypal.com/donate?token=CH0G-3m4p_T_JC9y3MxeJnbykCU4K9se5JDrJyiTgpFTWH8BzwqGmTGvh9tJC2SixTN5Wytpqh3Q1J1O"
        className="button-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a>

      { showSocialMedia &&
        <>
          <a
            href="https://www.facebook.com/pages/category/Charity-Organization/Nilito-Carlino-Foundation-102451708055048/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="Donate-icon"
              icon={["fab", "facebook"]}
            />
          </a>

          <a
            href="https://www.instagram.com/Nilitocarlinofoundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="Donate-icon"
              icon={["fab", "instagram"]}
            />
          </a>
        </>
      }

    </div>
  );
}
