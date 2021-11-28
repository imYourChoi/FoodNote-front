import React, { useEffect, useState } from 'react';
import axios from 'axios';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodItem from '../Components/FoodItem';

const List = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.getAll();
    // .then((response) => {
    //   setItems(response.data);
    // })
    // .catch((e) => {
    //   console.log('here');
    // });
  }, []);

  const foodItemEls = items.map((v) => (
    <FoodItem
      key={v.id}
      restaurant={v.restaurant}
      food={v.food}
      date={v.date}
    />
  ));
  return (
    <>
      <Header selected="list" />
      <Background
        title="방문 기록 : 리스트"
        subtitle="그 동안 방문하신 식당들의 기록입니다."
      />
      <div className="bodyContainer">
        <div className="content">
          {/* <div className="d-flex"> */}
          <div className="row">
            <div className="subtitle">목록</div>
            <div className="buttonGroup">
              <button type="button" className="orderButton">
                오름차순
              </button>
              <button type="button" className="orderButton">
                내림차순
              </button>
            </div>
          </div>
          {foodItemEls}
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default List;
