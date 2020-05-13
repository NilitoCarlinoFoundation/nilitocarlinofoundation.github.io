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
            year="2020"
            monthDay="Jul 1"
            name="Run Fast Road Race"
            address="Marathon Park, 789 Park St, Attleboro, MA 12345"
            time="8:00am"
            buttonName="Registration Closed"
          />

          <Event
            year="2020"
            monthDay="Sep 28"
            name="Run Slow Road Race"
            address="Half Marathon Park, 987 La La Lane, Wala Wala, WA 12345"
            time="9:00am"
            buttonName="Register"
          />
        </div>

        <div className="content">
          <h1>Past Events</h1>
           <Event
            year="2019"
            monthDay="Jun 1"
            name="What the Hill Road Race"
            address="Tall Hill Park, 111 Hill St, Attleboro, MA 12345"
            buttonName="Results"
          />
        </div>
      </div>

    </div>
  );
}
