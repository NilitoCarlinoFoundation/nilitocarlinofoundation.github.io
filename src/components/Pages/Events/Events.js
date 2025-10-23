import React, { useMemo } from 'react';
// when ready to use actual events, uncomment line 1 and delete line 3. Also uncomment the items below.
//import React from 'react';
import { isAfter, isToday } from 'date-fns';

import Calendar from './Calendar.js';
import Event from './Event.js';
import './Events.css';

/*Whenever you want to add or remove an event, do so in this list. Be sure to put date and time
stamps for eastern time. Time = hrs mins secs. 08:00 is 8am and minus 04:00 makes it align to
easter standard time. ALSO - to hide an event's associated button, simply change the url to null*/

const eventList = [

  {
      id: 1,
       date: new Date('2025-05-15T18:30:00-04:00'),
       name: 'Scholarship Night at Attleboro High School',
       address: '1 Blue Pride Way, Attleboro, MA 02703',
       buttonName: 'Register',
       url: null
   },

  {
      id: 2,
       date: new Date('2025-06-09T12:00:00-04:00'),
       name: 'Nilito Carlino Foundation - 3rd Annual Golf Tournament',
       address: 'Norton Country Club, 188 Oak St., Norton, MA 02766',
       buttonName: 'Register',
     //  url: 'http://ncfgolftournament.com/'//
       url: null
   },

  {
      id: 3,
       date: new Date('2025-06-28T09:00:00-04:00'),
       name: 'Attleboro Farmers Market',
       address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
       buttonName: 'Register',
       url: null
   },

   {
      id: 4,
       date: new Date('2025-07-19T09:00:00-04:00'),
       name: 'Attleboro Farmers Market',
       address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
       buttonName: 'Register',
       url: null
   },

   {
      id: 5,
       date: new Date('2025-08-16T09:00:00-04:00'),
       name: 'Attleboro Farmers Market',
       address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
       buttonName: 'Register',
       url: null
   },

   {
      id: 6,
       date: new Date('2025-09-06T09:00:00-04:00'),
       name: 'Attleboro Farmers Market',
       address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
       buttonName: 'Register',
       url: null
   },

   {
      id: 7,
       date: new Date('2025-10-04T09:00:00-04:00'),
       name: 'Attleboro Farmers Market',
       address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
       buttonName: 'Register',
       url: null
   },
  {
      id: 8,
       date: new Date('2025-10-19T10:00:00-04:00'),
       name: 'Nilito Carlino Foundation - 5th Annual 5K Run & Fitness Walk',
       address: 'Highland Park, 104 Mechanic Street, Attleboro, MA 02703',
       buttonName: 'Results',
       url: 'https://my.racewire.com/results/38391'
   },

  {
      id: 9,
       date: new Date('2024-05-16T18:30:00-04:00'),
       name: 'Scholarship Night at Attleboro High School',
       address: 'Attleboro High School, One Blue Pride Way, Attleboro, MA 02703',
       buttonName: 'Register',
       url: null
   },

  {
      id: 10,
       date: new Date('2024-06-10T12:00:00-04:00'),
       name: 'Nilito Carlino Foundation 2nd Annual Golf Tournament',
       address: 'Norton Country Club, 188 Oak St., Norton, MA 02766',
       buttonName: 'Register',
       url: null
   },

   {
      id: 11,
      date: new Date('2024-06-22T09:00:00-04:00'),
      name: 'Attleboro Farmers Market',
      address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
      buttonName: 'Results',
      url: null
  },

  {
      id: 12,
      date: new Date('2024-07-20T09:00:00-04:00'),
      name: 'Attleboro Farmers Market',
      address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
      buttonName: 'Results',
      url: null
  },

  {
      id: 13,
      date: new Date('2024-08-10T09:00:00-04:00'),
      name: 'Attleboro Farmers Market',
      address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
      buttonName: 'Results',
      url: null
  },

  {
      id: 14,
      date: new Date('2024-09-07T09:00:00-04:00'),
      name: 'Attleboro Farmers Market',
      address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
      buttonName: 'Results',
      url: null
  },

  {
      id: 15,
      date: new Date('2024-09-21T09:00:00-04:00'),
      name: 'Attleboro Farmers Market',
      address: 'La Salette Shrine, 947 Park Street, Attleboro, MA 02703',
      buttonName: 'Results',
      url: null
  },

  {
      id: 16,
      date: new Date('2024-10-06T10:00:00-04:00'),
      name: 'Nilito Carlino Foundation - 3rd Annual 5K Run & Fitness Walk',
      address: 'Highland Park, 104 Mechanic Street, Attleboro, MA 02703',
      buttonName: 'Results',
      url: 'https://my.racewire.com/results/38056'
   },

  {
      id: 17,
      date: new Date('2023-10-01T10:00:00-04:00'),
      name: 'Nilito Carlino Foundation - 2nd Annual 5K Run & Fitness Walk',
      address: 'Highland Park, 104 Mechanic Street, Attleboro, MA 02703',
      buttonName: 'Results',
      url: 'https://my.racewire.com/results/37626'
  },


  // {
   //   id: 5,
   //    date: new Date('2024-06-10T09:00:00-04:00'),
   //   name: '2nd Annual Golf Tournament',
   //    address: 'Tall Hill Park, 111 Hill St, Attleboro, MA 12345',
   //    buttonName: 'Results',
  //     url: null

];

const useEvents = (events) =>
  useMemo(() => {
    const today = new Date();
    const upcomingEvents = [];
    const pastEvents = [];

    events.forEach((event) => {
      if (isAfter(event.date, today) || isToday(event.date)) {
        upcomingEvents.push(event);
      } else {
        pastEvents.push(event);
      }
    });

    return { upcomingEvents, pastEvents };
  }, [events]);

export default function Events() {
  /*add pastEvents to line 69 when ready. Format = upcomingEvents, pastEvents  */
  const { upcomingEvents, pastEvents } = useEvents(eventList);

  return (
    <div className="Events">
      <div className="Events-calendar">
        <Calendar events={eventList} />
      </div>

      <div className="Events-content">
        <div className="content Events-upcoming">
          <h1>Upcoming Events</h1>
          {/*<div><h2>Coming Soon!!</h2></div>*/}

          {upcomingEvents.map((event) => (
            <Event
              key={event.id}
              date={event.date}
              name={event.name}
              address={event.address}
              buttonName={event.buttonName}
              url={event.url}
            />
          ))}
        </div>

        {/* Uncomment the section below, lines 90-103, to populate the "Past Events" section of the Events page */}

        <div className="content">
          <h1>Past Events</h1>

          {pastEvents.map(event =>
            <Event
              key={event.id}
              date={event.date}
              name={event.name}
              address={event.address}
              buttonName={event.buttonName}
              url={event.url}
            />
          )}
        </div>
      </div>
    </div>
  );
}
