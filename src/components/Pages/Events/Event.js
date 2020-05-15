import React, { memo } from 'react';
import { format } from 'date-fns';

import './Event.css';

function Event({ name, date, address, buttonName, url }) {
  return (
    <div className="Event">
      <div className="Event-date">
        <div className="Event-month-day">{format(date, 'MMM d')}</div>
        <div className="Event-year">{format(date, 'yyyy')}</div>
      </div>

      <div className="Event-details">
        <div className="Event-name">{name}</div>
        <div className="Event-address">{address}</div>
        <div className="Event-time">{format(date, 'h:mma')}</div>
        <div className="Event-button-name">{buttonName}</div>
      </div>
    </div>
  );
}

export default memo(Event);
