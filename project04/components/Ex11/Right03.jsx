import React, {useContext} from 'react'
import { NumContext } from '../../example/Ex11'

const Right03 = () => {

    // + 버튼 클릭시 setNum을 이용해야 한다!!
    // setNum을 꺼내서 버튼이 눌렸을 때 1 증가하게끔 만들어 주세요!!
    const data = useContext(NumContext)

  return (
    <div>
        <button onClick={() => {data.setNum(data.num + 1)}}>+</button>
    </div>
  )
}

export default Right03