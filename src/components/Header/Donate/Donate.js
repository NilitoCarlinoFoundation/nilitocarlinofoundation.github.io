import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Donate.css';

export default function Donate({ showSocialMedia = false }) {
  return (
    <div className="Donate">
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
        <input type="hidden" name="business" value="" />
        <input type="hidden" name="cmd" value="_donations" />
        <input type="hidden" name="currency_code" value="USD" />
        <input type="submit" value="Donate" className="button-link" />
      </form>

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
