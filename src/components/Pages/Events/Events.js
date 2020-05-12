import React from 'react';

import './Calendar.js';
import './Events.css';
import Event from './Event.js';


export default function Events() {
  return (
    <div className="Events">

      <div className="content Events-calendar">
        <h1>Calendar</h1>
        <div className="calendar">
        </div>
      </div>


      <div className="Events-content">
        <div className="content Events-upcoming">
          <h1>Upcoming Events</h1>
          <Event
            name="Run Fast Road Race"
            year="2020"
            monthDay="Jul 1"
          />

          <Event
            name="Run Slow Road Race"
            year="2020"
            monthDay="Sep 28"
          />
        </div>

        <div className="content">
          <h1>Past Events</h1>
           <Event
            name="This Race Already Occured"
            year="2019"
            monthDay="Jun 1"
          />
        </div>
      </div>

    </div>
  );
}
