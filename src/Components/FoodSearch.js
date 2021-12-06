import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './Food.css';

const FoodSearch = (props) => {
  const today = new Date();
  const visitDate = new Date(props.date);
  // console.log(day.toISOString().split('T')[0]);
  const diffTime = today - visitDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div className="foodSearchResult">
      <div className="searchRestaurant">{props.restaurant}</div>
      <div className="date">{props.date}</div>
      <div className="searchFood"> / {props.food}</div>
      <div className="trash" onClick={props.onDeleteClick}>
        <FaTrashAlt />
      </div>
      <div className="smallDday">
        {/* {diffDays >= 0 ? 'D+' + diffDays : 'D-' + Math.abs(diffDays)} */}
        {diffDays >= 0
          ? '+ ' + diffDays + '일'
          : '– ' + Math.abs(diffDays) + '일'}
      </div>
    </div>
  );
};

export default FoodSearch;
