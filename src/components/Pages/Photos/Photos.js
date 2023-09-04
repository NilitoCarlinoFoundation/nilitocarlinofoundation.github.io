import React from 'react';
import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';
import classes from './Photos.module.css';

const images = [
  { src: '/carousel/01_nick_flag.jpg', alt: 'Nick Flag' },
  { src: '/carousel/5kRaceHat.jpg', alt: '5k Race Hat' },
  { src: '/carousel/FirstScholarshipRecipient.png' },
  { src: '/carousel/Y1_DSC_Remote.jpg', alt: 'Remote Participants'},
  { src: '/carousel/Golf1.jpg', alt: 'Golf1' },
  { src: '/carousel/Golf2.jpg', alt: 'Golf2' },
  { src: '/carousel/Y1_DSC_5991.jpg', alt: 'Year1 Race Start'},
  { src: '/carousel/Golf3.jpg', alt: 'Golf3' },
  { src: '/carousel/Y1_DSC_5996.jpg', alt: 'Year1 Race StartII'},
  { src: '/carousel/Y1_DSC_5794.jpg', alt: '5K_Volunteers' },
  { src: '/carousel/02_nick_throw.jpg', alt: 'Nick Throwing' },
  { src: '/carousel/Golf4.jpg', alt: 'Golf4' },
  { src: '/carousel/Y1_DSC_5808.jpg', alt: 'Rocco 1' },
  { src: '/carousel/Golf5.jpg', alt: 'Golf5' },
  { src: '/carousel/Golf25.jpeg', alt: 'Golf25' },
  { src: '/carousel/03_nick_tc.jpg', alt: 'Nick TC' },
  { src: '/carousel/Y1_DSC_5844.jpg', alt: '5k_Volunteers 2' },
  { src: '/carousel/04_nick_baby.jpg', alt: 'Nick Baby' },
  { src: '/carousel/05_nick_headshot.jpg', alt: 'Nick Headshot' },
  { src: '/carousel/06_farmers.jpg', alt: 'Farmers Market' },
  { src: '/carousel/07_nick_blacksuit.jpg', alt: 'Nick Black Suit 1' },
  { src: '/carousel/08_nick_bluesuit.jpg', alt: 'Nick Blue Suit' },
  { src: '/carousel/09_nick_boat.jpg', alt: 'Nick on Boat' },
  { src: '/carousel/10_nick_blacksuitii.jpg', alt: 'Nick Black Suit 2' },
  { src: '/carousel/Y1_DSC_5892.jpg', alt: 'Nick Table' },
  { src: '/carousel/Y1_DSC_5917.jpg', alt: 'Volunteers 3' },
  { src: '/carousel/Golf24.jpg', alt: 'Golf24' },
  { src: '/carousel/Golf8.jpg', alt: 'Golf8' },
  { src: '/carousel/Golf9.jpg', alt: 'Golf9' },
  { src: '/carousel/Golf10.jpg', alt: 'Golf10' },
  { src: '/carousel/Golf26.jpeg', alt: 'Golf26' },
  { src: '/carousel/Golf11.jpg', alt: 'Golf11' },
  { src: '/carousel/Y1_DSC_6067.jpg', alt: 'Walkers' },
  { src: '/carousel/Golf12.jpg', alt: 'Golf12' },
  { src: '/carousel/Golf27.jpeg', alt: 'Golf27' },
  { src: '/carousel/Golf13.jpeg', alt: 'Golf13' },
  { src: '/carousel/Golf14.jpeg', alt: 'Golf14' },
  { src: '/carousel/Golf15.jpeg', alt: 'Golf15' },
  { src: '/carousel/Y1_DSC_6208.jpg', alt: 'Nick Table Photo' },
  { src: '/carousel/Golf16.jpeg', alt: 'Golf16' },
  { src: '/carousel/Golf17.jpg', alt: 'Golf17' },
  { src: '/carousel/Golf18.jpeg', alt: 'Golf18' },
  { src: '/carousel/Golf19.jpeg', alt: 'Golf19' },
  { src: '/carousel/Golf20.jpeg', alt: 'Golf20' },
  { src: '/carousel/Golf21.jpeg', alt: 'Golf21' },
  { src: '/carousel/Golf22.jpg', alt: 'Golf22' },
  { src: '/carousel/Golf23.jpeg', alt: 'Golf23' },
  { src: '/carousel/Y1_DSC_6445.jpg', alt: 'Wrist Bands' },
  { src: '/carousel/Golf28.jpeg', alt: 'Golf28' }
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
