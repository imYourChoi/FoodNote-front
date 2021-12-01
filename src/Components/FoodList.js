import React, { useState } from 'react';
import Modal from 'react-modal';
import { FaTrashAlt, FaInfoCircle, FaTimes } from 'react-icons/fa';
import './FoodItem.css';
import './Modal.css';

const FoodList = (props) => {
  const {
    modalIsOpen,
    openModal,
    closeModal,
    modalInfo,
    items,
    editRestaurant,
    editFood,
    setModalInfo,
  } = props;

  const countDay = (date) => {
    const today = new Date();
    const visitDate = new Date(date);
    const diffTime = today - visitDate;
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };
  const diffDays = countDay(props.date);
  const ModalDays = countDay(modalInfo.date);
  const count = items.filter(
    (x) => x.restaurant === modalInfo.restaurant,
  ).length;
  const [errorMessage, setErrorMessage] = useState('');
  return (
    <div className="foodItem">
      <div className="restaurant">{props.restaurant}</div>
      <div className="date">{props.date}</div>
      <div className="food"> / {props.food}</div>
      <div className="mod" onClick={() => openModal(props)}>
        <FaInfoCircle />
      </div>
      <div className="trash" onClick={props.onDeleteClick}>
        <FaTrashAlt />
      </div>
      <div className="dDay">
        {diffDays >= 0 ? 'D+' + diffDays : 'D-' + Math.abs(diffDays)}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="head">
          {modalInfo.restaurant}
          <button className="close" onClick={closeModal}>
            <FaTimes />
          </button>
        </div>
        <div className="modalContainer">
          <div className="modalDay">
            {ModalDays >= 0 ? 'D+' + ModalDays : 'D-' + Math.abs(ModalDays)}
          </div>
          <div className="text">총 방문 횟수 : {count}</div>
          <div className="text">먹은 음식 : {modalInfo.food}</div>
          <div className="text">방문 날짜 : {modalInfo.date}</div>
          <div
            style={{
              backgroundColor: '#c8c8c8',
              width: '354px',
              height: '1px',
              borderRadius: '1px',
              marginBottom: '15px',
              marginTop: '18px',
            }}
          >
            {' '}
          </div>
          <div className="editSub">수정하기 {errorMessage}</div>
          <div className="subsubtitle">식당 이름</div>
          <input
            type="text"
            className="editInput"
            placeholder="식당 이름을 입력해 주세요."
            value={editRestaurant}
            onChange={(t) => props.onEditRestaurant(t.target.value)}
          />
          <div className="subsubtitle">먹은 음식</div>
          <input
            type="text"
            className="editInput"
            placeholder="드신 음식을 입력해주세요."
            value={editFood}
            onChange={(t) => props.onEditFood(t.target.value)}
          />
          <button
            className="editButton"
            onClick={() => {
              if (editRestaurant === '' || editFood === '') {
                setErrorMessage(' : 모든 값을 입력해주세요!');
                return;
              }
              props.onEditClick(modalInfo.id);
              setModalInfo({
                restaurant: editRestaurant,
                food: editFood,
                date: modalInfo.date,
              });
              props.onEditRestaurant('');
              props.onEditFood('');
              setErrorMessage('');
            }}
          >
            수정하기
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default FoodList;
