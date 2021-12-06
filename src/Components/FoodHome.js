import React from 'react';
import './Food.css';

const FoodHome = (props) => {
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
