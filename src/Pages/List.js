import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodList from '../Components/FoodList';

class List extends Component {
  constructor(props) {
    super(props);
    this.retrieveFood = this.retrieveFood.bind(this);
    this.sortAddItems = this.sortAddItems.bind(this);
    this.sortDescItems = this.sortDescItems.bind(this);
    this.sortAscItems = this.sortAscItems.bind(this);
    this.sortAbcItems = this.sortAbcItems.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    // this.handleRoute = this.handleRoute.bind(this);
    this.state = {
      items: [],
      order: 'Add',
    };
  }

  componentDidMount() {
    this.retrieveFood();
  }

  onDeleteClick(v) {
    api.deleteOne(v).then(() => this.retrieveFood());
  }

  retrieveFood() {
    api
      .getAll()
      .then((response) => {
        this.setState({
          items: response.data,
        });
      })
      .catch((e) => console.log(e));
  }

  sortAddItems() {
    const item = this.state.items;
    const sortedItem = item.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
    this.setState({
      items: sortedItem,
      order: 'Add',
    });
  }

  sortDescItems() {
    const item = this.state.items;
    const sortedItem = item.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    this.setState({
      items: sortedItem,
      order: 'Desc',
    });
  }

  sortAscItems() {
    const item = this.state.items;
    const sortedItem = item.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    this.setState({
      items: sortedItem,
      order: 'Asc',
    });
  }

  sortAbcItems() {
    const item = this.state.items;
    const sortedItem = item.sort((a, b) => {
      return a.restaurant > b.restaurant ? 1 : -1;
    });
    this.setState({
      items: sortedItem,
      order: 'Abc',
    });
  }

  render() {
    const { items } = this.state;
    const foodItemEls = items.map((v) => (
      <FoodList
        id={v._id}
        restaurant={v.restaurant}
        food={v.food}
        date={v.date}
        onDeleteClick={() => this.onDeleteClick(v)}
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
                <button
                  type="button"
                  className={
                    this.state.order === 'Add'
                      ? 'clickedOrderButton'
                      : 'orderButton'
                  }
                  onClick={this.sortAddItems}
                >
                  추가순
                </button>
                <button
                  type="button"
                  className={
                    this.state.order === 'Abc'
                      ? 'clickedOrderButton'
                      : 'orderButton'
                  }
                  onClick={this.sortAbcItems}
                >
                  가나다순
                </button>
                <button
                  type="button"
                  className={
                    this.state.order === 'Asc'
                      ? 'clickedOrderButton'
                      : 'orderButton'
                  }
                  onClick={this.sortAscItems}
                >
                  오름차순
                </button>
                <button
                  type="button"
                  className={
                    this.state.order === 'Desc'
                      ? 'clickedOrderButton'
                      : 'orderButton'
                  }
                  onClick={this.sortDescItems}
                >
                  내림차순
                </button>
              </div>
            </div>
            {items.length === 0 ? (
              <div
                style={{
                  color: '#DD616E',
                  width: '100%',
                  height: '39px',
                  borderRadius: '8px',
                  // backgroundColor: '#eeeeee',
                  // borderStyle: 'solid',
                  // borderWidth: '1px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 2px 11px 16px',
                  // boxShadow: '0px 2px 2px -1px rgba(0, 0, 0, 0.25)',
                }}
              >
                추가하신 방문 기록이 없습니다.
              </div>
            ) : (
              foodItemEls
            )}
            <button
              type="button"
              className="addButton"
              // onClick={() => this.handleRoute('/add')}
            >
              추가하기
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(List);
