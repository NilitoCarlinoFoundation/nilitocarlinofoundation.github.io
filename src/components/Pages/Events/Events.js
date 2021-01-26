// import React, { useMemo } from 'react';
// when ready to use actual events, uncomment line 1 and delete line 3. Also uncomment the items below.
import React from 'react';
// import { isAfter, isToday } from 'date-fns';

import Calendar from './Calendar.js';
// import Event from './Event.js';
import './Events.css';

/*Whenever you want to add or remove an event, do so in this list. Be sure to put date and time
stamps for eastern time. Time = hrs mins secs. 08:00 is 8am and minus 04:00 makes it align to
easter standard time.*/

const eventList = [
  // {
  //   id: 1,
  //   date: new Date('2020-07-01T08:00:00-04:00'),
  //   name: 'Run Fast Road Race',
  //   address: 'Marathon Park, 789 Park St, Attleboro, MA 12345',
  //   buttonName: 'Registration Closed',
  //   url: null
  // },
  // {
  //   id: 2,
  //   date: new Date('2020-09-28T09:00:00-04:00'),
  //   name: 'Run Slow Road Race',
  //   address: 'Half Marathon Park, 987 La La Lane, Wala Wala, WA 12345',
  //   buttonName: 'Register',
  //   url: null
  // },
  // {
  //   id: 3,
  //   date: new Date('2019-06-01T09:00:00-04:00'),
  //   name: 'What the Hill Road Race',
  //   address: 'Tall Hill Park, 111 Hill St, Attleboro, MA 12345',
  //   buttonName: 'Results',
  //   url: null
  // }
];

// const useEvents = (events) =>
//   useMemo(
//     () => {
//       const today = new Date();
//       const upcomingEvents = [];
//       const pastEvents = [];

//       events.forEach(event => {
//         if (isAfter(event.date, today) || isToday(event.date)) {
//           upcomingEvents.push(event);
//         } else {
//           pastEvents.push(event);
//         }
//       });

//       return { upcomingEvents, pastEvents };
//     },
//     [events]
//   );

export default function Events() {
  // const { upcomingEvents, pastEvents } = useEvents(eventList);

  return (
    <div className="Events">

      <div className="Events-calendar">
        <Calendar events={eventList} />
      </div>

      <div className="Events-content">
        <div className="content Events-upcoming">
          <h1>Upcoming Events</h1>
            <div><h2>Coming Soon!!</h2></div>

 {/*         {upcomingEvents.map(event =>
            <Event
              key={event.id}
              date={event.date}
              name={event.name}
              address={event.address}
              buttonName={event.buttonName}
              url={event.url}
            />
          )}
*/}
        </div>

{/* Uncomment the section below to populate the "Past Events" section of the Events page */}

 {/*       <div className="content">
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
        </div> */}
      </div>
    </div>
  );
}
