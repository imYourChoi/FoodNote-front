import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Background from '../Components/Background';

const List = () => {
  return (
    <>
      <Header selected="list" />
      <Background
        title="방문 기록 : 리스트"
        subtitle="그 동안 방문하신 식당들의 기록입니다."
      />
      <div className="container">container</div>
    </>
  );
};

export default List;
