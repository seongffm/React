import React, {useContext} from 'react';
import { ColorContext } from '../../example/Ex10_useContext';

const ColorList = () => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
  const data = useContext(ColorContext)

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
          onClick={() => data.setColor(color)}
        ></div>
      ))}
    </div>
  );
};

export default ColorList;
