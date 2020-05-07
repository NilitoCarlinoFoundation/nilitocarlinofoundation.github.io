import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './Donate.css';

export default function Donate() {
	return (
		<div className="Donate">
			<button onClick={() => {}}>
				Donate
			</button>
			 <FontAwesomeIcon className="Donate-facebook" icon={['fab', 'facebook']} onClick={() => {}} />
		</div>
	);
}

