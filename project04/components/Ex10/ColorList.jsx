import React from 'react';

const ColorList = ({ onSelectColor }) => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue'];

  const selectColor = (color) => {
    onSelectColor(color);
  };

  return (
    <div style={{ display: 'flex' }}>
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: color,
            marginRight: '2px',
            cursor: 'pointer',
          }}
          onClick={() => selectColor(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorList;
