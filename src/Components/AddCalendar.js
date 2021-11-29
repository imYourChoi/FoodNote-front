import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './AddCalendar.css';

const Calendar = (props) => {
  const { setAddDate } = props;
  const handleDateClick = (arg) => {
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const localISOTime = new Date(arg.date - tzoffset)
      .toISOString()
      .slice(0, -1)
      .split('T')[0];
    setAddDate(localISOTime);
  };
  const handleDateSet = () => {
    setAddDate('');
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      fixedWeekCount={false}
      dateClick={handleDateClick}
      datesSet={handleDateSet}
      selectable
      // unselectAuto={false}
      showNonCurrentDates={false}
      // contentHeight="60px"
    />
  );
};

export default Calendar;
