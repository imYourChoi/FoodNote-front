import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Modal from 'react-modal';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodList from '../Components/FoodList';
import '../Components/Modal.css';
import './Page.css';
// import Modal from '../Components/Modal';

class List extends Component {
  constructor(props) {
    super(props);
    this.retrieveFood = this.retrieveFood.bind(this);
    this.sortAddItems = this.sortAddItems.bind(this);
    this.sortDescItems = this.sortDescItems.bind(this);
    this.sortAscItems = this.sortAscItems.bind(this);
    this.sortAbcItems = this.sortAbcItems.bind(this);
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.setModalInfo = this.setModalInfo.bind(this);
    this.onEditRestaurant = this.onEditRestaurant.bind(this);
    this.onEditFood = this.onEditFood.bind(this);

    this.state = {
      items: [],
      order: 'Add',
      modalIsOpen: false,
      modalInfo: [],
      editRestaurant: '',
      editFood: '',
    };
  }

  componentDidMount() {
    this.retrieveFood();
  }

  handleClick() {
    this.props.history.push('/add');
  }

  onDeleteClick(v) {
    api.deleteOne(v).then(() => this.retrieveFood());
  }

  onEditClick(id) {
    api
      .update(id, {
        restaurant: this.state.editRestaurant,
        food: this.state.editFood,
      })
      .then(() => api.getAll())
      .then((response) => {
        this.setState({
          items: response.data,
        });
      })
      .catch((e) => console.log(e));
  }

  onEditRestaurant(nextState) {
    this.setState({ editRestaurant: nextState });
  }

  onEditFood(nextState) {
    this.setState({ editFood: nextState });
  }

  setModalInfo(nextState) {
    this.setState({ modalInfo: nextState });
  }

  openModal(p) {
    this.setState({ modalIsOpen: true });
    this.setModalInfo(p);
  }

  closeModal() {
    this.setState({ modalIsOpen: false, editFood: '', editRestaurant: '' });
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
    Modal.setAppElement('body');
    const { items, modalIsOpen, modalInfo } = this.state;
    const foodItemEls = items.map((v) => (
      <FoodList
        key={v._id}
        v={v}
        id={v._id}
        restaurant={v.restaurant}
        food={v.food}
        date={v.date}
        items={items}
        onDeleteClick={() => this.onDeleteClick(v)}
        modalIsOpen={modalIsOpen}
        openModal={this.openModal}
        closeModal={this.closeModal}
        modalInfo={modalInfo}
        setModalInfo={this.setModalInfo}
        onEditRestaurant={this.onEditRestaurant}
        onEditFood={this.onEditFood}
        onEditClick={this.onEditClick}
        editRestaurant={this.state.editRestaurant}
        editFood={this.state.editFood}
      />
    ));
    return (
      <>
        <Header selected="list" />
        <Background
          title="?????? ?????? : ?????????"
          subtitle="??? ?????? ???????????? ???????????? ???????????????."
        />
        <div className="bodyContainer">
          <div className="content">
            <div className="row">
              <div className="subtitle">??????</div>
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
                  ?????????
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
                  ????????????
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
                  ????????????
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
                  ????????????
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
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '10px 2px 11px 16px',
                }}
              >
                ???????????? ?????? ????????? ????????????.
              </div>
            ) : (
              foodItemEls
            )}
            <button
              type="button"
              className="addRouteButton"
              onClick={() => this.handleClick()}
            >
              ????????????
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(List);
