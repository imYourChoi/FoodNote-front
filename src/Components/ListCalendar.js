import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './ListCalendar.css';

const Calendar = (props) => {
  //   console.log(props);
  const { setDate, event } = props;
  const handleDateClick = (arg) => {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const localISOTime = new Date(arg.date - tzoffset)
      .toISOString()
      .slice(0, -1)
      .split('T')[0];
    setDate({ date: localISOTime });
  };
  const handleDateSet = () => {
    setDate({ date: '' });
  };

  return (
    <div className="cal">
      <FullCalendar
        events={event}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        fixedWeekCount={false}
        dateClick={handleDateClick}
        datesSet={handleDateSet}
        selectable
        unselectAuto={false}
        showNonCurrentDates={false}
        // contentHeight="60px"
      />
    </div>
  );
};

export default Calendar;
