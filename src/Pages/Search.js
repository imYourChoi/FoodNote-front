import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Background from '../Components/Background';

const Search = () => {
  return (
    <>
      <Header selected="search" />
      <Background
        title="검색하기"
        subtitle="식당 혹은 드신 음식으로 검색해보세요."
      />
      <div className="container">container</div>
    </>
  );
};

export default Search;
