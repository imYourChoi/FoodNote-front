import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodCalendar from '../Components/FoodCalendar';
import ListCalendar from '../Components/ListCalendar';

import './Page.css';
import '../App.css';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.retrieveFood = this.retrieveFood.bind(this);
    this.updateFood = this.updateFood.bind(this);
    this.setDate = this.setDate.bind(this);
    this.viewAll = this.viewAll.bind(this);
    this.state = {
      allItems: [],
      items: [],
      date: '',
      event: [],
    };
  }

  componentDidMount() {
    this.retrieveFood();
  }

  handleClick() {
    this.props.history.push('/add');
  }

  setDate(nextState) {
    this.setState(nextState, () => {
      const checkItem = (item) => {
        return this.state.date === item.date;
      };
      const item = this.state.allItems.filter(checkItem);
      this.setState({ items: item });
    });
  }

  viewAll() {
    this.setState({ items: this.state.allItems, date: '전체 보기' });
  }

  retrieveFood() {
    api
      .getAll()
      .then((response) => {
        this.setState(
          {
            allItems: response.data,
          },
          () => {
            const newEvent = [];
            const getWords = (item) => {
              console.log(item);
              newEvent.push({ title: item.restaurant, start: item.date });
            };
            this.state.allItems.forEach(getWords);
            this.setState({ event: newEvent });
          },
        );
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
    const { items, date } = this.state;
    const foodItemEls = items.map((v) => (
      <FoodCalendar
        key={v.id}
        restaurant={v.restaurant}
        food={v.food}
        date={v.date}
      />
    ));

    console.log(this.state.event);

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
                  <ListCalendar
                    setDate={this.setDate}
                    event={this.state.event}
                  />
                </div>
                <div className="calendarButtonRow">
                  <button
                    type="button"
                    className="calendarButton"
                    onClick={() => this.viewAll()}
                  >
                    전체보기
                  </button>
                  <button
                    type="button"
                    className="calendarButton"
                    onClick={() => this.handleClick()}
                  >
                    추가하기
                  </button>
                </div>
              </div>
              <div className="column">
                <div className="subtitle">
                  {date === '' ? '날짜를 선택해주세요' : '날짜 : ' + date}
                </div>
                {date === '' ? (
                  <div
                    style={{
                      color: '#DD616E',
                      width: '275px',
                      height: '39px',
                      borderRadius: '8px',
                      // backgroundColor: '#eeeeee',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '10px 2px 11px 16px',
                      // boxShadow: '0px 2px 2px -1px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    날짜를 선택해주세요.
                  </div>
                ) : items.length === 0 ? (
                  <div
                    style={{
                      color: '#DD616E',
                      width: '275px',
                      height: '39px',
                      borderRadius: '8px',
                      // backgroundColor: '#eeeeee',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '10px 2px 11px 16px',
                      // boxShadow: '0px 2px 2px -1px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    해당 날짜에 방문 기록이 없습니다.
                  </div>
                ) : (
                  foodItemEls
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Calendar);
