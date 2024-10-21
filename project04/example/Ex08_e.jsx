import React, {useState, useRef} from 'react'

const Ex08 = () => {

  const inputRef = useRef();
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');

  function addData() {

    setData(data.concat(inputRef.current.value));
    // setInput('');
  }

  function deleteData(e) {
    // e.target.value
    setData(data.filter((dataEl, index) => index != e.target.value));
  }

  return (
    <div>
      <h1>2024 올해는 꼭 해봅시답!</h1>
        <input
          type="text"
          // value={input}
          onChange={e => setInput(e.target.value)}
          ref={inputRef}
          placeholder="Add your to-do"></input> 
        <button onClick={addData}>계획 추가!</button>

        <h1>Todo_List</h1>
        <ul>
        {data.map((dataEl, index) => <li key={index}>{dataEl} <button onClick={deleteData} value={index}>삭제</button></li>)}
        </ul>
    </div>
  )
}

export default Ex08;