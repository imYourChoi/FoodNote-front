import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import AddCalendar from '../Components/AddCalendar';

import './Page.css';
import '../App.css';

const Add = () => {
  const [addRestaurant, setAddRestaurant] = useState('');
  const [addFood, setAddFood] = useState('');
  const [addDate, setAddDate] = useState(
    // new Date().toISOString().split('T')[0],
    '',
  );
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('#dd616e');
  console.log(addDate);

  const history = useHistory();
  const handleRoute = (path) => {
    history.push(path);
  };
  const addData = () => {
    var data = { restaurant: addRestaurant, food: addFood, date: addDate };
    setMessageColor('#DD616E');
    if (addRestaurant === '' || addFood === '') {
      setMessage('식당과 음식을 모두 입력해주세요.');
      return;
    }
    if (addDate === '') {
      setMessage('오른쪽 달력에서 날짜를 선택해주세요.');
      return;
    }
    api.add(data);
    setAddRestaurant('');
    setAddFood('');
    setAddDate('');
    setMessageColor('#23913C');
    setMessage('성공적으로 추가하였습니다.');
  };
  return (
    <>
      <Header selected="add" />
      <Background
        title="식사는 잘 하셨나요?"
        subtitle="오늘 방문하신 식당과 음식을 기록해주세요."
      />
      <div className="bodyContainer">
        <div className="content">
          <div className="d-flex">
            <div className="column">
              <div className="subtitle">식당 이름</div>
              <input
                type="text"
                className="textInput"
                placeholder="식당 이름을 입력해 주세요."
                value={addRestaurant}
                onChange={(v) => setAddRestaurant(v.target.value)}
              />
              <div className="subtitle">먹은 음식</div>
              <input
                type="text"
                value={addFood}
                className="textInput"
                placeholder="드신 음식을 입력해주세요."
                onChange={(v) => setAddFood(v.target.value)}
              />
              <div className="subtitle">날짜</div>
              <input
                type="text"
                value={addDate}
                className="dateInput"
                placeholder="달력에서 날짜를 선택해주세요."
                onChange={(v) => setAddDate(v.target.value)}
                readOnly
              />
              <div className="messageRow">
                <div className="message" style={{ color: messageColor }}>
                  {message}
                </div>
              </div>
              <div className="addButtonRow">
                <button
                  className="listButton"
                  onClick={() => handleRoute('/list')}
                >
                  목록
                </button>
                <button className="addButton" onClick={addData}>
                  추가하기
                </button>
              </div>
            </div>
            <div className="column">
              <div className="subtitle">날짜</div>
              <div className="calendar">
                <AddCalendar addDate={addDate} setAddDate={setAddDate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
