import React from 'react';
import './FoodItem.css';

const TodoItem = (props) => {
  return (
    <div className="foodItem">
      <div className="restaurant">{props.restaurant}</div>
      <div className="date">{props.date}</div>

      {/* <span style={{ textDecoration: props.done ? 'line-through' : 'none' }}>
        {props.name}
      </span> */}
    </div>
  );
};

export default TodoItem;
