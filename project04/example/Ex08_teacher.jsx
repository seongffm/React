import React, {useState, useRef, useEffect} from 'react'

const Ex08 = () => {

  const inputRef = useRef()

// todos 배열 
// todo 
// - content : 내용 
// - completed : 완료여부 (t/f) 
// - num : 글의 고유번호

  const [todos, setTodos] = useState([{
    content : "물 마시기",
    completed : false,
    num : 1
  }])

  /** 스프레드 문법 (spread)
   * ...객체 : 객체를 새로 만들어 값을 넣어주는 복사를 진행
   */

  /** todos 리스트 내에 새로운 todo를 추가하는 것 */
  const handleNewTodoAdd = () => {
    console.log('새로운 todo : ', inputRef.current.value)
    setTodos ([...todos, {
      content : inputRef.current.value,
      completed : false,
      num : todos.length + 1
    }])

    inputRef.current.value = ""
  }

  /** 체크 버튼을 클릭 했을 때, 할 일을 완료 상태로 바꾸고 밑 줄을 그어준다. */
  const handleTodoCompleted = (num) => {
    console.log('completed function', num)

    const newTodos = [...todos]
    
    let idx = newTodos.findIndex(item => item.num == num)
    console.log('idx', idx)

    newTodos[idx].completed = !newTodos[idx].completed
    // console.log(newTodos)
    setTodos(newTodos)
  }

  /** 선택한 todo를 삭제하는 함수 */
  const handleTodoDelete = (num) => {
    console.log('completed function', num)

    const newTodos = [...todos]
    
    let idx = newTodos.findIndex(item => item.num === num)

    // 배열 함수 : splice(원본 배열에 새로운 요소를 추가, 삭제, 교체한 배열을 반환하는 함수)
    // 배열.splice(변경을 시작할 index, 제거할 수, 추가할 내용)
    newTodos.splice(idx, 1)
    setTodos(newTodos)
  }

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div>
      <h1>2024 올해는 꼭 해봅시답!</h1>
        <input
        placeholder="Add your to-do"
        type='txt'
        ref={inputRef}/>
        <button onClick={handleNewTodoAdd}>계획 추가!</button>

        <h1>Todo_List</h1>
        <ul>
            {todos.map((item) => (
              <li key={item.num}>
                <input
                  type='checkbox'
                  onChange={() => {handleTodoCompleted(item.num)}}
                />
                <label
                  style={{textDecoration : item.completed ? 'line-through' : 'none'}}
                >
                  <span>{item.content}</span>
                </label>
                <button onClick={() => {handleTodoDelete(item.num)}}>삭제</button>
              </li>
            ))}
        </ul>
    </div>
  )
}

export default Ex08;