import React from 'react';

import './Calendar.js';
import './Events.css';

export default function Events() {
  return (
    <div className="Events">

      <div className="content">
        <h1>Calendar</h1>
        <div className="calendar">
  {/*        <script src="//cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js"></script>*/}
        </div>
      </div>

      <div className="content">
        <h1>Upcoming Events</h1>
        <div className="content-text">
          Date on one side, details on the other with Register button
        </div>
      </div>

      <div className="content">
        <h1>Past Events</h1>
        <div className="content-text">
          Date on one side, details on the other with Results button
        </div>
      </div>
    </div>
  );
}
