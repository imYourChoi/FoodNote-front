import React from 'react';
import Modal from 'react-modal';
import { FaTrashAlt } from 'react-icons/fa';
import './FoodItem.css';

const FoodItem = (props) => {
  const { modalIsOpen, openModal, closeModal } = props;
  const today = new Date();
  const visitDate = new Date(props.date);
  // console.log(day.toISOString().split('T')[0]);
  const diffTime = today - visitDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return (
    <div className="foodItem">
      <div className="restaurant">{props.restaurant}</div>
      <div className="date">{props.date}</div>
      <div className="food"> / {props.food}</div>
      <div className="mod" onClick={openModal}>
        mod
      </div>
      <div className="trash" onClick={props.onDeleteClick}>
        <FaTrashAlt />
      </div>
      <div className="dDay">
        {diffDays >= 0 ? 'D+' + diffDays : 'D -' + Math.abs(diffDays)}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        // contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <div>I am a modal</div>
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
};

export default FoodItem;
