import React from 'react';
import '../App.css';

const SectionTitle = (props) => {
  return (
    <div
      style={{
        display: 'flex',
        margin: 'auto',
        width: '630px',
        height: '300px',
        padding: '140px 0px 70px 15px',
      }}
    >
      <div>
        <h1
          style={{
            color: 'white',
            fontSize: '48px',
            lineHeight: '55px',
            marginBottom: '12px',
            fontFamily: 'Nanum Gothic',
            fontWeight: '700',
          }}
        >
          {props.title}
        </h1>
        <h5
          style={{
            marginTop: '12px',
            color: 'white',
            lineHeight: '23px',
            fontFamily: 'Nanum Gothic',
          }}
        >
          {props.subtitle}
        </h5>
      </div>
    </div>
  );
};

export default SectionTitle;
