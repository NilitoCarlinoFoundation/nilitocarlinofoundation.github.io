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
            <li>Sharon Lecuyer - Secretary, Website Manager</li>
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
          Thank you to our wonderful sponsors for your never-ending support!
          <p>
          Interested in becoming a sponsor?
          Please email us at <i>nilitocarlinofoundation@gmail.com</i>
          </p>
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
              <p>
              <a
              className="text-link"
              href="https://www.cryanlandscape.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Cryan Landscape Contractors Inc.
              </a>
              {' '}|
              <a
              className="text-link"
              href="https://www.harborone.com/personal"
              target="_blank"
              rel="noopener noreferrer"
            >
              Harbor One Bank
              </a>
              {' '} | Mark & Elinor Klempner | Dave & Diane Legg</p>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-gold" icon={solid('star')} />{' '}
                Gold{' '}
              </h4>
              <p>Rocky & Anna Carlino | John Fitzmaurice | Leanne Wilson</p>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-silver" icon={solid('star')} />{' '}
                Silver{' '}
              </h4>
              <p>
                Jeffrey & Suzette Brousseau | Ted & Leslie Burns | {' '}
              <a
              className="text-link"
              href="https://www.coastal1.org/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Coastal1 Credit Union
              </a>
              {' '} Kenny & Jessi Galanif | Lorraine Legg | {' '}
              <a
              className="text-link"
              href="https://lipsettandsons.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Lipsett & Sons, Inc.
              </a>
              {' '} | Mike, Bonnie & Harry Marcel | Jonathan & Amanda Metzger | {' '}
              <a
              className="text-link"
              href="https://morins.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Morin's Catering
              </a>
              {' '} | {' '}
              <a
              className="text-link"
              href="https://neurology-partners.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Neurology Partners, P.C.
              </a>
              {' '} | {' '}
              <a
              className="text-link"
              href="https://www.facebook.com/attleborobestbuddies/"
              target="_blank"
              rel="noopener noreferrer"
              >
              </a>
                Janet Salomon | {' '}
              <a
              className="text-link"
              href="https://www.sbtclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Southampton Bath & Tennis Club
              </a>
              {' '} | Dr. John Sullivan | {' '}
              <a
              className="text-link"
              href="https://www.facebook.com/ShawnTheLandscaper/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Wacky's Landscaping
              </a>
              </p>
            </li>
            <li>
              <h4>
                <FontAwesomeIcon className="star-bronze" icon={solid('star')} />{' '}
                Bronze{' '}
              </h4>
              <p>
                {' '}
              <a
              className="text-link"
              href="https://www.bluefintechnologypartners.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Bluefin Technology Partners, LLC
              </a>
              {' '} | {' '}
              <a
              className="text-link"
              href="https://www.downeastdoors.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Downeast Doors - Ken Galanif
              </a>
              {' '} | {' '} Mark Frano, CPA | {' '}
              <a
              className="text-link"
              href="https://www.facebook.com/p/Germaine-Heating-Plumbing-Inc-100067109485790/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Germain Plumbing & Heating, Inc.
              </a>
              {' '} | {' '}
              <a
              className="text-link"
              href="https://kcsburgerbar.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                KC's Classic Burger Bar
              </a>
              {' '} | Frank & Marty King | The Leary Family | Scott Lipsett | {' '}
              <a
              className="text-link"
              href="https://www.napsmaintenance.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Nap's Maintenance Service Inc.
              </a>
              {' '} |
              <a
              className="text-link"
              href="https://omni-plumbing-inc.business.site/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Omni Plumbing Inc.
              </a>
              {' '} | Joseph and Kim Piro | {' '}
              <a
              className="text-link"
              href="https://poptopssportswear.com/PTS/shop/home"
              target="_blank"
              rel="noopener noreferrer"
              >
                Pop Tops Sportswear
              </a>
              {' '} | Bob Siris | Julianne Townsend | {' '}
              <a
              className="text-link"
              href="https://www.durcan-cuddy.com/"
              target="_blank"
              rel="noopener noreferrer"
              >
                Willis-MacKinnon Insurance Agency, Inc.
              </a>
              {' '}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
