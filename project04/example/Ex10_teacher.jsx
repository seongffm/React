import React, {useState} from 'react'
import ColorList from '../components/Ex10/ColorList_teacher'
import ColorResult from '../components/Ex10/ColorResult_teacher'
import { ColorContext } from '../context/ColorContext';

const Ex10 = () => {

    // 내가 전역적으로 사용해 줄 state를 정의 (Provider가 있는 위치에서)
    const [choiceColor, setChoiceColor] = useState('red');

  return (
    <div>
      <ColorContext.Provider value={{choiceColor : choiceColor, setChoiceColor : setChoiceColor}}>
        <h1>색상 변경하기</h1>
        <p>원하는 색상을 클릭하세요.</p>
        <ColorList />
        <hr />
        <p>선택하신 색상입니다.</p>
        <ColorResult />
      </ColorContext.Provider>
    </div>
  );
};

export default Ex10;