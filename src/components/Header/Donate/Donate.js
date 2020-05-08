import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './Donate.css';

export default function Donate() {
	return (
		<div className="Donate">
			<a
        href="https://www.facebook.com/pages/category/Charity-Organization/Nilito-Carlino-Foundation-102451708055048/"
        className="button-link"
        target="_blank"
      >
        Donate
			</a>

			<a
        href="https://www.facebook.com/pages/category/Charity-Organization/Nilito-Carlino-Foundation-102451708055048/"
        target="_blank"
      >
        <FontAwesomeIcon className="Donate-facebook" icon={['fab', 'facebook']}/>
      </a>
		</div>
	);
}

