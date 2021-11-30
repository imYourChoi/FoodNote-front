import React from 'react';
import './FoodItem.css';

const FoodCalendar = (props) => {
  const today = new Date();
  const visitDate = new Date(props.date);
  // console.log(day.toISOString().split('T')[0]);
  const diffTime = today - visitDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div className="foodCalendarResult">
      <div className="restaurant">{props.restaurant}</div>
      <div className="date">{props.date}</div>
      <div className="food"> / {props.food}</div>
      <div className="smallDday">
        {diffDays >= 0 ? 'D+' + diffDays : 'D -' + Math.abs(diffDays)}
      </div>
    </div>
  );
};

export default FoodCalendar;
