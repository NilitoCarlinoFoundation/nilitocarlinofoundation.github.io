import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Donate.css';

export default function Donate() {
  return (
    <div className="Donate">
{/*}      <a
        href="https://www.facebook.com/pages/category/Charity-Organization/Nilito-Carlino-Foundation-102451708055048/"
        className="button-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Donate
      </a> */}

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

    </div>
  );
}
