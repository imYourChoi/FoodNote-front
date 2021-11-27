import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import './AddCalendar.css';

const Calendar = () => {
  // var dayGridPlugin = createPlugin({
  //   initialView: 'dayGridMonth',
  //   // optionRefiners: OPTION_REFINERS$1,
  //   views: {
  //     dayGridMonth: {
  //       type: 'dayGrid',
  //       duration: { months: 1 },
  //       monthMode: true,
  //       fixedWeekCount: true,
  //     },
  //   },
  // });

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      // height="275px"
      fixedWeekCount={false}
      // views= {
      //   dayGridMonth= {[
      //       {type: 'dayGrid'},
      //       duration= { months: 1 },
      //       monthMode= true,
      //       fixedWeekCount= true,
      //   ]},
      // }

      // showNonCurrentDates="true"
      // contentHeight="60px"
    />
  );
};

export default Calendar;
