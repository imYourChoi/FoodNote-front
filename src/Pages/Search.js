/* eslint-disable prefer-destructuring */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodSearch from '../Components/FoodSearch';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.retrieveFood = this.retrieveFood.bind(this);
    this.updateFood = this.updateFood.bind(this);
    this.recommendWord = this.recommendWord.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.state = {
      allItems: [],
      items: [],
      searchWord: '',
      category: '',
      recommend: [],
    };
  }

  componentDidMount() {
    this.retrieveFood();
    this.updateFood();
    this.recommendWord();
  }

  onDeleteClick(v) {
    console.log(v);
    api.deleteOne(v).then(() => this.updateFood());
  }

  onCategoryClick(v) {
    if (this.state.category === v.target.innerText) {
      this.setState({ category: '' });
    } else {
      this.setState({ category: v.target.innerText });
    }
  }

  onSearchClick(word) {
    const checkItem = (name) => {
      if (this.state.category === '식당') {
        return name.restaurant.includes(word);
      }
      if (this.state.category === '음식') {
        return name.food.includes(word);
      }
      return name.food.includes(word) || name.restaurant.includes(word);
    };
    const item = this.state.allItems.filter(checkItem);
    this.setState({ items: item });
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

  recommendWord() {
    api.getAll().then((response) => {
      const list = response.data;
      const getWords = (item, index, arr) => {
        arr[index] = [item.food, item.restaurant];
      };
      const getOne = (item, index, arr) => {
        if (this.state.category === '음식') {
          arr[index] = item[0];
        } else if (this.state.category === '식당') {
          arr[index] = item[1];
        } else {
          arr[index] = item[Math.round(Math.random())];
        }
      };
      list.forEach(getWords);
      const shuffled = list.sort(() => 0.5 - Math.random());
      const recs = shuffled.slice(
        0,
        Math.ceil(shuffled.length / 2) > 5 ? 5 : Math.ceil(shuffled.length / 2),
      );
      recs.forEach(getOne);
      this.setState({ recommend: recs });
    });
    // .catch((e) => console.log(e));
  }

  render() {
    const { allItems, items, searchWord, category } = this.state;
    const foodItemEls = (items.length === 0 ? allItems : items).map((v) => (
      <FoodSearch
        key={v.id}
        restaurant={v.restaurant}
        food={v.food}
        date={v.date}
        onDeleteClick={() => this.onDeleteClick(v)}
      />
    ));
    return (
      <>
        <Header selected="search" />
        <Background
          title="검색하기"
          subtitle="식당 혹은 드신 음식으로 검색해보세요."
        />
        <div className="bodyContainer">
          <div className="content">
            <div className="d-flex">
              <div className="column">
                <div className="subtitle">검색 창</div>
                <input
                  type="text"
                  className="smallTextInput"
                  placeholder="키워드를 입력해 주세요."
                  value={searchWord}
                  onChange={(v) => {
                    this.setState({ searchWord: v.target.value });
                  }}
                />
                <div className="categoryButtonRow">
                  <div className="categoryText">분류 :</div>
                  <button
                    className={
                      category === '식당'
                        ? 'selectedCategoryButton'
                        : 'categoryButton'
                    }
                    onClick={(v) => {
                      this.onCategoryClick(v);
                      this.recommendWord();
                    }}
                  >
                    식당
                  </button>
                  <button
                    className={
                      category === '음식'
                        ? 'selectedCategoryButton'
                        : 'categoryButton'
                    }
                    onClick={(v) => {
                      this.onCategoryClick(v);
                      this.recommendWord();
                    }}
                  >
                    음식
                  </button>
                  <div className="line"> </div>
                  <button
                    className="searchButton"
                    onClick={() => this.onSearchClick(searchWord)}
                  >
                    {searchWord !== '' ? '검색하기' : '전체보기'}
                  </button>
                </div>
                <div className="subtitle">추천 키워드</div>
                <div className="recWordRow">
                  {this.state.recommend.map((item) => (
                    <div
                      className="recWord"
                      onClick={(v) =>
                        this.setState({ searchWord: v.target.innerText })
                      }
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="column">
                <div className="subtitle">검색 결과</div>
                {items.length === 0 ? (
                  <div
                    style={{
                      color: '#DD616E',
                      width: '310px',
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
                    일치하는 검색 결과가 없습니다.
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

// const Search = () => {
//   return (
//     <>
//       <Header selected="search" />
//       <Background
//         title="검색하기"
//         subtitle="식당 혹은 드신 음식으로 검색해보세요."
//       />
//       <div className="container">container</div>
//     </>
//   );
// };

// export default Search;
