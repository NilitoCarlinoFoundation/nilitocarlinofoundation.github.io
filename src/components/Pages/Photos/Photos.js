import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import classes from './Photos.module.css';

const images = [
  { src: '/carousel/01_nick_flag.jpg', alt: 'Nick Flag' },
  { src: '/carousel/5kRaceHat.jpg', alt: '5k Race Hat' },
  { src: '/carousel/FirstScholarshipRecipient.png' },
  { src: '/carousel/Y1_DSC_Remote.jpg', alt: 'Remote Participants'},
  { src: '/carousel/Y1_DSC_5778.jpg', alt: 'Lori' },
  { src: '/carousel/Y1_DSC_5787.jpg', alt: 'Lori Family' },
  { src: '/carousel/Y1_DSC_5794.jpg', alt: 'Volunteers' },
  { src: '/carousel/02_nick_throw.jpg', alt: 'Nick Throwing' },
  { src: '/carousel/Y1_DSC_5808.jpg', alt: 'Rocco 1' },
  { src: '/carousel/Y1_DSC_5822.jpg', alt: 'Leanne' },
  { src: '/carousel/Y1_DSC_5836.jpg', alt: 'Baby' },
  { src: '/carousel/03_nick_tc.jpg', alt: 'Nick TC' },
  { src: '/carousel/Y1_DSC_5844.jpg', alt: 'Volunteers 2' },
  { src: '/carousel/04_nick_baby.jpg', alt: 'Nick Baby' },
  { src: '/carousel/05_nick_headshot.jpg', alt: 'Nick Headshot' },
  { src: '/carousel/06_farmers.jpg', alt: 'Farmers Market' },
  { src: '/carousel/07_nick_blacksuit.jpg', alt: 'Nick Black Suit 1' },
  { src: '/carousel/08_nick_bluesuit.jpg', alt: 'Nick Blue Suit' },
  { src: '/carousel/09_nick_boat.jpg', alt: 'Nick on Boat' },
  { src: '/carousel/10_nick_blacksuitii.jpg', alt: 'Nick Black Suit 2' },
  { src: '/carousel/Y1_DSC_5856.jpg', alt: 'Marc' },
  { src: '/carousel/Y1_DSC_5892.jpg', alt: 'Nick Table' },
  { src: '/carousel/Y1_DSC_5917.jpg', alt: 'Volunteers 3' },
  { src: '/carousel/Y1_DSC_5926.jpg', alt: 'Kids Race' },
  { src: '/carousel/Y1_DSC_5980.jpg', alt: 'Race Start' },
  { src: '/carousel/Y1_DSC_5991.jpg', alt: 'Race Start 2' },
  { src: '/carousel/Y1_DSC_5996.jpg', alt: 'Race Start 3' },
  { src: '/carousel/Y1_DSC_5998.jpg', alt: 'Race Start 4' },
  { src: '/carousel/Y1_DSC_6038.jpg', alt: 'Racers' },
  { src: '/carousel/Y1_DSC_6048.jpg', alt: 'Racer 49' },
  { src: '/carousel/Y1_DSC_6067.jpg', alt: 'Walkers' },
  { src: '/carousel/Y1_DSC_6090.jpg', alt: 'Racer 71' },
  { src: '/carousel/Y1_DSC_6093.jpg', alt: 'Pete and Noranda' },
  { src: '/carousel/Y1_DSC_6131.jpg', alt: 'Racer 63' },
  { src: '/carousel/Y1_DSC_6140.jpg', alt: 'Racer 33' },
  { src: '/carousel/Y1_DSC_6172.jpg', alt: 'Racer 63 Finish' },
  { src: '/carousel/Y1_DSC_6179.jpg', alt: 'Marc Flags' },
  { src: '/carousel/Y1_DSC_6208.jpg', alt: 'Nick Table Photo' },
  { src: '/carousel/Y1_DSC_6229.jpg', alt: 'Racer 29' },
  { src: '/carousel/Y1_DSC_6236.jpg', alt: 'Racer 60' },
  { src: '/carousel/Y1_DSC_6284.jpg', alt: 'Racer 68' },
  { src: '/carousel/Y1_DSC_6334.jpg', alt: 'Raffle Cans' },
  { src: '/carousel/Y1_DSC_6357.jpg', alt: 'Leslie Family' },
  { src: '/carousel/Y1_DSC_6369.jpg', alt: 'Racer 52 Group' },
  { src: '/carousel/Y1_DSC_6397.jpg', alt: 'Rocco Hug' },
  { src: '/carousel/Y1_DSC_6445.jpg', alt: 'Wrist Bands' }
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

export default function Photos() {
  return (
    <div className={classes.Photos}>
      <Carousel responsive={responsive} showDots infinite autoPlay>
        {images.map(({ src, alt }, index) => (
          <div key={index}>
            <img src={src} alt={alt} className={classes['carousel-photo']} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
