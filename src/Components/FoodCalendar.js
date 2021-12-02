import React from 'react';
import './FoodItem.css';

const FoodCalendar = (props) => {
  const today = new Date();
  const visitDate = new Date(props.date);
  const diffTime = today - visitDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div className="foodCalendarResult">
      <div className="restaurant">{props.restaurant}</div>
      <div className="date">{props.date}</div>
      <div className="smallFood"> / {props.food}</div>
      <div className="smallDday">
        {/* {diffDays >= 0 ? 'D+' + diffDays : 'D-' + Math.abs(diffDays)} */}
        {diffDays >= 0
          ? '+ ' + diffDays + '일'
          : '– ' + Math.abs(diffDays) + '일'}
      </div>
    </div>
  );
};

export default FoodCalendar;
