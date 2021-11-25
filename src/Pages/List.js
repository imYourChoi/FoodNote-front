import React, { useEffect } from 'react';
import Header from '../Components/Header';
import Background from '../Components/Background';

const List = () => {
  return (
    <>
      <Header selected="list" />
      <Background />
      <div className="container">container</div>
    </>
  );
};

export default List;
