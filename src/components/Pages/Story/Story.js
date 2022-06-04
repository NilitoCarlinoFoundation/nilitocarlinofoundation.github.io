import React from 'react';

import NickAndRocco from '../../../assets/images/Nick_Rocco_DW_II.png';
import './Story.css';

export default function Story() {
  return (
    <div className="Story">
      <div className="content-image">
        <img src={NickAndRocco} alt="Nick and Rocco DW" />
      </div>

      <div className="content">
        <h1>Nilito "Nick" Rocco Carlino</h1>
        <div className="content-text">
          Nick was a graduate of Attleboro High School, Class of 2018, having
          simultaneously attended the Culinary Arts and Business Management
          program at Johnson and Wales University in Providence, RI, during his
          last year of high school, and where he was continuing his studies. He
          most recently had also been working as Chef de Partie at the
          Southampton Bath & Tennis Club in Southampton, NY.
          <p>
            Nick was a kind, generous, and talented young man with a heart of
            gold. He loved to cook and was enthusiastic about his culinary
            studies. He enjoyed music of all kinds; football; fishing; and
            poetry, having successfully written his own poetry book. Nick was
            active with the Attleboro YMCA; SkillsUSA; partnering alongside his
            father with Team Challenge of New England & the Crohn's & Colitis
            Foundation, and volunteering as a Best Buddy through Best Buddies
            International. He had a wonderful way of connecting with everyone he
            met, and delighted in working with kids. Nick's warmth and
            infectious smile will forever be missed by those fortunate enough to
            have known him.
          </p>
        </div>
      </div>
    </div>
  );
}
