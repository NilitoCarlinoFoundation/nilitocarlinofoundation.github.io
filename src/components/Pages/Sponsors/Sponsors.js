import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
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
            <li>Rocco R. Carlino III</li>
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

        <h1>Board Members</h1>
        <div className="content-text">
          Meet our dedicated team...we could not do this without you!
          <ul className="board-list">
            <li>Rocco R. Carlino III - President</li>
            <li>Marc Blandin - Vice President</li>
            <li>Joanne Brousseau - Treasurer</li>
            <li>Sharon Lecuyer - Secretary</li>
            <li>Leslie Burns</li>
            <li>Jacquelyn Hope</li>
            <li>Carol Lipsett</li>
            <li>Leanne Wilson</li>
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
                <FontAwesomeIcon className="diamond" icon={solid('gem')} />{' '}
                Diamond{' '}
              </h4>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon
                  className="star-platinum"
                  icon={solid('star')}
                />{' '}
                Platinum{' '}
              </h4>
              <p> Mark & Elinor Klempner | Dave & Diane Legg</p>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-gold" icon={solid('star')} />{' '}
                Gold{' '}
              </h4>
              <p>Rocky & Anna Carlino | John Fitzmaurice</p>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-silver" icon={solid('star')} />{' '}
                Silver{' '}
              </h4>
              <p>
                Jeffrey & Suzette Brousseau | Ted & Leslie Burns | Lorraine Legg
                | Lipsett & Sons, Inc. | Mike, Bonnie & Harry Marcel | Jonathan
                & Amanda Metzger | Neurology Partners, P.C. | Pawtucket Credit
                Union | Janet Salomon | Southampton Bath & Tennis Club | Wacky's
                Landscaping
              </p>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-bronze" icon={solid('star')} />{' '}
                Bronze{' '}
              </h4>
              <p>
                {' '}
                Bluefin Technology Partners, LLC | Cryan Landscape Contractors
                Inc. | Downeast Doors - Ken Galanif | Mark Frano, CPA | Germain
                Plumbing & Heating, Inc. | KC's Classic Burger Bar | Frank &
                Marty King | Nap's Maintenance Service Inc. | Omni Plumbing Inc.
                | Joseph and Kim Piro | Bob Siris | Willis-McKinnon Insurance
                Agency, Inc.{' '}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
