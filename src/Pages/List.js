import React, { useEffect, useState, Component } from 'react';
import axios from 'axios';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodItem from '../Components/FoodItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.retrieveFood = this.retrieveFood.bind(this);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.retrieveFood();
  }

  // const [items, setItems] = useState([]);
  retrieveFood() {
    api
      .getAll()
      .then((response) => {
        console.log(response.data);
        this.setState({
          items: response.data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { items } = this.state;
    // this.retrieveFood();
    console.log(items);
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
                <button
                  type="button"
                  className="orderButton"
                  onClick={this.retrieveFood}
                >
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
  }
}
