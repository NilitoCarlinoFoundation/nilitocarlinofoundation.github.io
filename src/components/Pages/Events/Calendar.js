import React, {
  memo,
  useCallback,
  useState,
  useMemo,
  useRef,
  useEffect,
  forwardRef
} from 'react';
import {
  format,
  isToday,
  isSameMonth,
  startOfMonth,
  endOfMonth,
  isSameDay,
  getDay,
  addDays,
  addMonths,
  subDays,
  subMonths,
  isSameWeek
} from 'date-fns';
import clsx from 'clsx';

import './Calendar.css';

const useCalendarWeeks = (date) =>
  useMemo(() => {
    const days = [];

    // backfill
    const dayOfWeek = getDay(date);
    if (dayOfWeek) {
      for (let i = dayOfWeek; i > 0; i--) {
        days.push(subDays(date, i));
      }
    }

    // current month
    let day = date;
    while (isSameMonth(day, date)) {
      days.push(day);
      day = addDays(day, 1);
    }

    // forward fill
    const endOfCurrentMonth = endOfMonth(date);
    const endDayOfWeek = getDay(endOfCurrentMonth);
    if (endDayOfWeek !== 6) {
      for (let i = endDayOfWeek, j = 1; i < 6; i++, j++) {
        days.push(addDays(endOfCurrentMonth, j));
      }
    }

    const weeks = [];

    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7));
    }

    return weeks;
  }, [date]);

const weekKey = (week) => {
  const [firstDay] = week;
  const lastDay = week[week.length - 1];

  return `week-${+firstDay}-${+lastDay}`;
};

const dayKey = (date) => format(date, 'yyyyMMdd');

const Day = memo(
  forwardRef(({ day, className, events, selected, setSelectedDate }, ref) => {
    const selectDay = useCallback(() => {
      setSelectedDate(day);
    }, [day, setSelectedDate]);

    return (
      <div key={day} className={className} onClick={selectDay} ref={ref}>
        <div className="day-name">{format(day, 'eee')}</div>
        <div className="day-number">{format(day, 'dd')}</div>
        <div className="day-events">
          {events?.map((event) => (
            <span className="blue" key={event.id} />
          ))}
        </div>
      </div>
    );
  })
);

const WeekRow = memo(
  ({ week, eventsByDate, date, selectedDate, setSelectedDate }) => {
    const arrowRef = useRef(null);
    const selecetedDayRef = useRef(null);
    const displayDetails =
      Boolean(selectedDate) && isSameWeek(week[0], selectedDate);
    const detailEvents = selectedDate
      ? eventsByDate[dayKey(selectedDate)]
      : null;

    useEffect(() => {
      if (!displayDetails) return;

      const dayEl = selecetedDayRef.current;
      arrowRef.current.style.left =
        dayEl.offsetLeft - dayEl.parentNode.offsetLeft + 27 + 'px';
    }, [displayDetails, selectedDate]);

    return (
      <div className="week">
        {week.map((day) => {
          const selected =
            Boolean(selectedDate) && isSameDay(day, selectedDate);
          return (
            <Day
              key={day}
              className={clsx(
                'day',
                !isSameMonth(day, date) && 'other',
                isToday(day) && 'today'
              )}
              day={day}
              events={eventsByDate[dayKey(day)]}
              selected={selected}
              setSelectedDate={setSelectedDate}
              ref={selected ? selecetedDayRef : null}
            />
          );
        })}
        {displayDetails && (
          <div className="details in">
            <div className="arrow" ref={arrowRef} />
            <div className="events in">
              {detailEvents ? (
                detailEvents.map((event) => (
                  <div key={event.id} className="event">
                    <div className="event-category blue" />
                    <span>{event.name}</span>
                  </div>
                ))
              ) : (
                <div className="event empty">
                  <span>No Events</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
);

const Calendar = ({ events }) => {
  const [date, setDate] = useState(() => startOfMonth(new Date()));
  const [selectedDate, setSelectedDate] = useState(null);
  const weeks = useCalendarWeeks(date);
  const eventsByDate = useMemo(() => {
    const byDate = {};
    events.forEach((event) => {
      const key = dayKey(event.date);
      (byDate[key] || (byDate[key] = [])).push(event);
    });
    return byDate;
  }, [events]);

  const selectPrevMonth = useCallback(() => {
    setDate((date) => startOfMonth(subMonths(date, 1)));
  }, []);

  const selectNextMonth = useCallback(() => {
    setDate((date) => startOfMonth(addMonths(date, 1)));
  }, []);

  return (
    <div id="calendar">
      <div className="header">
        <h1>{format(date, 'MMMM yyyy')}</h1>
        <div className="right" onClick={selectNextMonth} />
        <div className="left" onClick={selectPrevMonth} />
      </div>

      <div className="month new">
        {weeks.map((week) => (
          <WeekRow
            key={weekKey(week)}
            week={week}
            eventsByDate={eventsByDate}
            date={date}
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(Calendar);
