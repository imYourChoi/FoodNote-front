import React from 'react';
import './Background.css';
import SectionTitle from './SectionTitle';

const Background = (props) => {
  return (
    <div className="bg">
      {' '}
      <SectionTitle title={props.title} subtitle={props.subtitle} />
    </div>
  );
};

export default Background;
