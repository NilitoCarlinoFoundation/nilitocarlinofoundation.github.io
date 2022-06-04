import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import './Donate.css';

export default function Donate({ showSocialMedia = false }) {
  return (
    <div className="Donate">
      <form
        action="https://www.paypal.com/donate"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="hosted_button_id" value="D84ZLNXQ25SSL" />
        <input type="submit" value="Donate" className="button-link" />
      </form>

      {showSocialMedia && (
        <>
          <a
            href="https://www.facebook.com/pages/category/Charity-Organization/Nilito-Carlino-Foundation-102451708055048/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="Donate-icon"
              icon={brands('facebook')}
            />
          </a>

          <a
            href="https://www.instagram.com/Nilitocarlinofoundation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="Donate-icon"
              icon={brands('instagram')}
            />
          </a>
        </>
      )}
    </div>
  );
}
