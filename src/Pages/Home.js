import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  FaRegCalendarAlt,
  FaClipboardList,
  FaPenAlt,
  FaSearch,
} from 'react-icons/fa';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodHome from '../Components/FoodHome';

class Home extends Component {
  constructor(props) {
    super(props);
    this.retrieveFood = this.retrieveFood.bind(this);
    this.sortRecItems = this.sortRecItems.bind(this);
    this.sortOldItems = this.sortOldItems.bind(this);
    this.state = {
      allItems: [],
      recitems: [],
      olditems: [],
    };
  }

  componentDidMount() {
    this.retrieveFood();
  }

  handleList() {
    this.props.history.push('/list');
  }

  handleCalendar() {
    this.props.history.push('/calendar');
  }

  handleAdd() {
    this.props.history.push('/add');
  }

  handleSearch() {
    this.props.history.push('/search');
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
            this.sortRecItems();
            this.sortOldItems();
          },
        );
      })
      .catch((e) => console.log(e));
  }

  sortRecItems() {
    const item = this.state.allItems;
    let sortedItem = item.sort((a, b) => {
      return new Date(a.createdAt) - new Date(b.createdAt);
    });
    sortedItem = sortedItem.slice(0, 3);
    this.setState({
      recitems: sortedItem,
    });
  }

  sortOldItems() {
    const item = this.state.allItems;
    let sortedItem = item.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    sortedItem = sortedItem.slice(0, 3);
    this.setState({
      olditems: sortedItem,
    });
  }

  //   handleClick() {
  //     this.props.history.push('/add');
  //   }

  render() {
    const { recitems, olditems } = this.state;
    const recFoodItemEls = recitems.map((v) => (
      <FoodHome
        key={v._id}
        restaurant={v.restaurant}
        food={v.food}
        date={v.date}
      />
    ));

    const oldFoodItemEls = olditems.map((v) => (
      <FoodHome
        key={v._id}
        restaurant={v.restaurant}
        food={v.food}
        date={v.date}
      />
    ));

    return (
      <>
        <Header selected="" />
        <Background
          title="???????????????!"
          subtitle="FoodNote?????? ????????? ???????????? ??????????????????."
        />
        <div className="bodyContainer">
          <div className="content">
            {/* <div className="d-flex"> */}
            {/* <div className="column"> */}
            <div className="row">
              <div className="homecolumn">
                <div className="subtitle">?????? ????????? ??????</div>
                {recitems.length === 0 ? (
                  <div
                    style={{
                      color: '#DD616E',
                      width: '100%',
                      height: '39px',
                      borderRadius: '8px',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '10px 2px 11px 16px',
                      marginBottom: '12px',
                    }}
                  >
                    ???????????? ?????? ????????? ????????????.
                  </div>
                ) : (
                  recFoodItemEls
                )}
              </div>
              <div className="homecolumn">
                <div className="subtitle">???????????? ????????? ??????</div>
                {olditems.length === 0 ? (
                  <div
                    style={{
                      color: '#DD616E',
                      width: '100%',
                      height: '39px',
                      borderRadius: '8px',
                      borderStyle: 'solid',
                      borderWidth: '1px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      padding: '10px 2px 11px 16px',
                      marginBottom: '12px',
                    }}
                  >
                    ???????????? ?????? ????????? ????????????.
                  </div>
                ) : (
                  oldFoodItemEls
                )}
              </div>
            </div>
            {/* </div> */}
            <div className="row">
              <div className="box" onClick={() => this.handleList()}>
                <FaClipboardList />
                <div className="boxText">????????? ??????</div>
              </div>
              <div className="box" onClick={() => this.handleCalendar()}>
                <FaRegCalendarAlt />
                <div className="boxText">?????? ??????</div>
              </div>
              <div className="box" onClick={() => this.handleAdd()}>
                <FaPenAlt />
                <div className="boxText">????????????</div>
              </div>
              <div className="box" onClick={() => this.handleSearch()}>
                <FaSearch />
                <div className="boxText">????????????</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Home);
