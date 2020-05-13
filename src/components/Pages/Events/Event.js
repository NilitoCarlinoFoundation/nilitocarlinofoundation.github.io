import React from 'react';

import './Event.css';

export default function Event({ name, year, monthDay, address, time, buttonName, url }) {
  return (
    <div className="Event">

      <div className="Event-date">
        <div className="Event-month-day">{monthDay}</div>
        <div className="Event-year">{year}</div>
      </div>

      <div className="Event-details">
        <div className="Event-name">{name}</div>
        <div className="Event-address">{address}</div>
        <div className="Event-time">{time}</div>
        <div className="Event-button-name">{buttonName}</div>

      </div>

    </div>
  );
}