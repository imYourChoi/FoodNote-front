import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodList2 from '../Components/FoodList2';
import ListCalendar from '../Components/ListCalendar';

import './Page.css';
import '../App.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.retrieveFood = this.retrieveFood.bind(this);
    this.updateFood = this.updateFood.bind(this);
    this.setDate = this.setDate.bind(this);
    // this.onDateClick = this.onDateClick.bind(this);
    this.state = {
      allItems: [],
      items: [],
      date: '',
    };
  }

  componentDidMount() {
    this.retrieveFood();
  }

  handleClick() {
    this.props.history.push('/add');
  }

  // onDateClick(nextState) {
  //   this.setState(nextState);
  // }

  setDate(nextState) {
    this.setState(nextState, () => {
      const checkItem = (item) => {
        return this.state.date === item.date;
      };
      const item = this.state.allItems.filter(checkItem);
      this.setState({ items: item });
    });
  }

  retrieveFood() {
    api
      .getAll()
      .then((response) => {
        this.setState({
          allItems: response.data,
        });
      })
      .catch((e) => console.log(e));
  }

  updateFood() {
    api
      .getAll()
      .then((response) => {
        this.setState({
          items: response.data,
        });
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { allItems, items, date } = this.state;
    const foodItemEls = (items.length === 0 ? allItems : items).map((v) => (
      <FoodList2
        key={v.id}
        restaurant={v.restaurant}
        food={v.food}
        date={v.date}
      />
    ));
    return (
      <>
        <Header selected="calendar" />
        <Background
          title="방문 기록 : 달력"
          subtitle="그 동안 방문하신 식당들의 기록입니다."
        />
        <div className="bodyContainer">
          <div className="content">
            <div className="d-flex">
              <div className="column">
                <div className="subtitle">달력</div>
                <div className="calendar">
                  <ListCalendar setDate={this.setDate} />
                </div>
                <button
                  type="button"
                  className="addRouteButton"
                  onClick={() => this.handleClick()}
                >
                  추가하기
                </button>
              </div>
              <div className="column">
                <div className="subtitle">
                  {date === '' ? '날짜를 선택해주세요' : date}
                </div>
                {date === '' ? '' : foodItemEls}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Calendar);
