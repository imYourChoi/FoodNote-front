import React, { Component } from 'react';

import * as api from '../api/api';
import Header from '../Components/Header';
import Background from '../Components/Background';
import FoodSearch from '../Components/FoodSearch';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.retrieveFood = this.retrieveFood.bind(this);
    this.onCategoryClick = this.onCategoryClick.bind(this);
    this.state = {
      allItems: [],
      items: [],
      searchWord: '',
      category: '',
    };
  }

  componentDidMount() {
    this.retrieveFood();
  }

  onDeleteClick(v) {
    console.log(v);
    // console.log(this.state.items);
    api.deleteOne(v).then(() => this.retrieveFood());
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

  render() {
    const { items, searchWord, category } = this.state;
    const foodItemEls = items.map((v) => (
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
                  className="textInput"
                  placeholder="키워드를 입력해 주세요."
                  value={searchWord}
                  onChange={(v) =>
                    this.setState({ searchWord: v.target.value })
                  }
                />
                <div className="categoryButtonRow">
                  <div className="categoryText">분류 :</div>
                  <button
                    className={
                      category === '식당'
                        ? 'selectedCategoryButton'
                        : 'categoryButton'
                    }
                    onClick={(v) => this.onCategoryClick(v)}
                  >
                    식당
                  </button>
                  <button
                    className={
                      category === '음식'
                        ? 'selectedCategoryButton'
                        : 'categoryButton'
                    }
                    onClick={(v) => this.onCategoryClick(v)}
                  >
                    음식
                  </button>
                  <button
                    className="searchButton"
                    onClick={() => this.onSearchClick(searchWord)}
                  >
                    검색하기
                  </button>
                </div>
                <div className="subtitle">추천 키워드</div>
              </div>
              <div className="column">
                <div className="subtitle">검색 결과</div>
                {items.length === 0 ? (
                  <div
                    style={{
                      marginTop: '4px',
                      marginLeft: '4px',
                      fontSize: '14px',
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
