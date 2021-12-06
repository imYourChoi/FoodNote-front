import React from 'react';
import './Food.css';

const FoodCalendar = (props) => {
  const today = new Date();
  const visitDate = new Date(props.date);
  const diffTime = today - visitDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  console.log(props.date.slice(0, 4));
  return (
    <div className="foodCalendarResult">
      <div className="smallRestaurant">{props.restaurant}</div>
      <div className="date">
        {props.date.slice(0, 4) === '2021'
          ? props.date.slice(5, 10)
          : props.date}
      </div>
      <div className="smallFood"> / {props.food}</div>
      <div className="smallDday">
        {diffDays >= 0
          ? '+ ' + diffDays + '일'
          : '– ' + Math.abs(diffDays) + '일'}
      </div>
    </div>
  );
};

export default FoodCalendar;
