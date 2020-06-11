import React from 'react';

import './Home.css';

export default function Home() {
	return (
		<div className="Home">
			<div className="content">
				<h1>The Nilito Carlino Foundation</h1>
				<div className="content-text">
					The Nilito “Nick” Carlino Foundation is a non-profit, volunteer-led organization
          created in the wake of Nick's untimely death. <br></br>
          <br></br>

          Our goal is to raise funds for an annual academic Culinary Arts Scholarship
          to be awarded to a graduate of Attleboro High School.
        </div>
			</div>

			<div className="content-image">
				<img src="/Nick_Chef_BW.png" alt="Nick Chef" />
			</div>

		</div>

	);
}
