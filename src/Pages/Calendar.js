import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Background from '../Components/Background';

const Calendar = () => {
  return (
    <>
      <Header selected="calendar" />
      <Background />
      <div className="container">container</div>
    </>
  );
};

export default Calendar;
