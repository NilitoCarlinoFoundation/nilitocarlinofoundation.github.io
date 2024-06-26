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
        {/* If the url is null, no button will render here */}
        {url &&
            <div className="Event-button-name">
          {/* When you are ready to post the Register button, uncomment this line and change the link*/}
            <a
              href={url}
              className="button-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {buttonName}
            </a>
          </div>
        }
      </div>
    </div>
  );
}

export default memo(Event);
