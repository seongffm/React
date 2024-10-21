// rafce + Enter -> 자동 완성

import React, {useState} from 'react'
import '../App.css'

const Ex01 = () => {

  /* 
  Ex01 학습 목표!
  1) 리엑트에서 Event 객체를 사용해보자
  2) 왜 우리는 리엑트에서 변수를 사용할 수 없는지 알아보자
  3) 변수를 대체해서 state를 사용해보자
  */

  /*
  React Event
  1. html 요소 안에 onClick : camel Case로 작성
  2. onClick = {함수} 이 때, 함수 뒤에 ()는 붙이지 않는다. -> () : 호출의 의미로 무한으로 돌아가서 사용 X
  3. 이 때, 함수는 별도로 만든 함수여도 O, 안에 바로 함수를 넣는 것도 O
    - {increase} (O)
    - {() => {console.log('function')}} (O) -> 매개변수를 이용할 때
  4. DOM 요소 안에만 이벤트를 설정 할 수 있다.
    - 내가 직접 만든 컴포넌트 활용할 수 X -> ex) MenuItem
  */

  // 변수 : 값은 변하지만 화면에 렌더링 되지 않는다.
  let num = 0;

  // state
  // const [state이름, 그 state를 변경시키는 함수] = useState(초기값)
  //  - state 이름 : 변수처럼 활용 가능 -> ex) (num)
  //  - 대부분 set + state 이름을 붙임 -> ex) (setNum)

  // 1. useState를 import 해온다
  // 2. state를 선언한다.
  const [num2, setNum2] = useState(0);

  // 3. state의 값을 변경한다.
  // state를 변경시키는 함수(변경할 값);
  // setNum2(num2 + 1);
  
  /** 숫자를 1씩 증가시키는 함수 */
  // /** */ : 설명
  const increase = () => {
    console.log('increase function');
    num += 1;
    // console.log(num);

    setNum2(num2 + 1); // --> 클로저 함수(함수 제일 마지막에 실행 시키겠습니다!!)
    console.log(num2);
    // -> 이 부분에서 실행!
  };
  
  /** 숫자를 1씩 감소시키는 함수 */
  const decrease = () => {
    setNum2(num2 - 1);
  };

  return (
    <div className='div-center'>
      {/* <h1>{num}</h1> */}
      <h1>{num2}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
};

export default Ex01;