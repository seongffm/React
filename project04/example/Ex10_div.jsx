import React, {createContext, useState} from 'react'
import ColorList from '../components/Ex10/ColorList_div'
import ColorResult from '../components/Ex10/ColorResult_div'

export const ColorContext = createContext();

const Ex10 = () => {
  const [color, setColor] = useState(0)

  return (
    <div>

    <ColorContext.Provider value={{color : color, setColor : setColor}}>
      
        <h1>색상 변경하기</h1>
        <p>원하는 색상을 클릭하세요</p>
        <ColorList onClick/>
        <hr/>
        <p>선택하신 색상입니다.</p>
        <ColorResult/>
        </ColorContext.Provider>
         </div>
  )
}

export default Ex10