import React, { useState, useRef } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const todoInputRef = useRef();

  const addTodo = () => {
    const todoInputValue = todoInputRef.current.value.trim();
    if (!todoInputValue) return;
    setTodos([...todos, todoInputValue]);
    todoInputRef.current.value = '';
  };

  const deleteTodo = index => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          ref={todoInputRef}
          placeholder="Add your to-do"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <span style={{ marginRight: '8px' }}>{todo}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
