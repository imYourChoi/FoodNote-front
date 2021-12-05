import React, { useState } from 'react';
import './FoodItem.css';

const FoodHome = (props) => {
  const countDay = (date) => {
    const today = new Date();
    const visitDate = new Date(date);
    const diffTime = today - visitDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };
  const diffDays = countDay(props.date);
  return (
    <div className="foodItem">
      <div className="restaurant">{props.restaurant}</div>
      <div className="date">{props.date}</div>
      <div className="food"> / {props.food}</div>
      {/* <div className="dDay">
        {diffDays >= 0
          ? '+ ' + diffDays + '일'
          : '– ' + Math.abs(diffDays) + '일'}
      </div> */}
    </div>
  );
};

export default FoodHome;
