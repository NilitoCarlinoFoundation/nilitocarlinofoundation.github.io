import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import './Sponsors.css';
//import Sponsor from './Sponsor.js';

export default function Sponsors() {
  return (
    <div className="Sponsors">
      <div className="content">
        <h1>Contributors</h1>
        <div className="content-text">
          Thank you to our generous contributors for supporting The Nilito
          Carlino Foundation:
          <ul className="contributors-list">
            <li>Rocco R Carlino III</li>
            <li>Joanne Brousseau</li>
            <li>Team Challenge</li>

            {/*}						<li>Once Upon a Time Bookstore</li>
							<li>Culinary School</li>
							<li>Roger A. Benson</li>
							<li>Amy & Patrick Miller</li>
							<li>K. Landry</li>
							<li>Pop's Candy Store</li> */}
          </ul>
        </div>
      </div>

      <div className="content">
        <h1>Sponsors</h1>
        <div className="content-text">
          Thank you to our wonderful sponsors for your never-ending support:
          {/*Wrap ul below in scrolling container*/}
          <ul className="Sponsors-list">
            <li>
              <h4>
                <FontAwesomeIcon className="diamond" icon={faGem} /> Diamond{' '}
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-platinum" icon={faStar} />{' '}
                Platinum{' '}
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-gold" icon={faStar} /> Gold{' '}
              </h4>
              <p>
                Rocky & Anna Carlino | John Fitzmaurice | Mark and Elinor
                Klempner
              </p>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-silver" icon={faStar} /> Silver{' '}
              </h4>
              <p>
                Jeffrey and Suzette Brousseau | Lorraine Legg | Lipsett and
                Sons, Inc. | Mike, Bonnie & Harry Marcel | Jonathan and Amanda
                Metzger | Neurology Partners, P.C. | Pawtucket Credit Union |
                Janet Salomon
              </p>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-bronze" icon={faStar} /> Bronze{' '}
              </h4>
              <p>
                {' '}
                Bluefin Technology Partners, LLC | Cryan Landscape Contractors
                Inc. | Downeast Doors - Ken Galanif | Germain Plumbing &
                Heating, Inc. | KC's Classic Burger Bar | Frank & Marty King |
                Omni Plumbing Inc. | Joseph and Kim Piro | Bob Siris |
                Willis-McKinnon Insurance Agency, Inc.{' '}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
