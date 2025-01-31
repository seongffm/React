import React, { useContext } from 'react';
import { ColorContext } from '../../context/ColorContext';

const ColorResult = () => {

  const { choiceColor } = useContext(ColorContext)

  return (
    <div>
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: choiceColor
        }}
      ></div>
    </div>
  );
};

export default ColorResult;
