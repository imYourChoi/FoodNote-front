import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';

import './Page.css';
import '../App.css';

const Add = () => {
  const [addRestaurant, setAddRestaurant] = useState('');
  const [addFood, setAddFood] = useState('');

  // const onAddClick = () => {
  //   // 추가 요청 전송
  //   axios.post(`/api/todo`, {
  //     name: addRestaurant,
  //   });
  // };

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
                value={addRestaurant}
                onChange={(v) => setAddRestaurant(v.target.value)}
              />
              <div className="subtitle">먹은 음식</div>
              <input
                type="text"
                value={addFood}
                onChange={(v) => setAddFood(v.target.value)}
              />
              <button onClick={() => api.add()}>추가하기</button>
            </div>
            <div className="column">
              <div className="subtitle">날짜</div>
              <div className="calendar">asd</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;
