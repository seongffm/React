import React from 'react';

const ColorResult = ({ selectedColor }) => {
  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor
        }}
      ></div>
    </div>
  );
};

export default ColorResult;
