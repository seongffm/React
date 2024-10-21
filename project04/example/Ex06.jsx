import React, {useState, useRef} from 'react'

// useRef : 태그를 선택하는 기능
const Ex06 = () => {

  const inputRef = useRef();
  const [inputText, setInputText] = useState('');

  function getData() {
    // e.target.value;
    // document.querySelector('input').value;
    // 리액트에서 document.querySelector('input') or getElementByOOOO
    // --> 위 방식으로 태그를 찾아오는 것은 권장하지 않는다
    // inputRef.current : inputRef 가 가르키는 태그를 의미
    // inputRef.current.value;
    setInputText(inputRef.current.value)
  }

  return (
    <div>
        <h1>Input 태그 다루기</h1>
        {
            /*
            e : 이벤트 객체(이벤트의 전반적인 내용 전부)
            e.target : 이벤트를 발생시킨 주체
            e.targe.value : input 태그의 적은 값
            */
        }
        {/* <input onChange={(e) => setInputText(e.target.value)}></input> */}
        {/* ref={inputRef} inputRef 라는 변수를 input 태그에 대응시키겠다 */}
        <input ref={inputRef}></input> 
        <button onClick={getData}>출력</button>
        <h1>{inputText}</h1>
    </div>
  )
}

export default Ex06