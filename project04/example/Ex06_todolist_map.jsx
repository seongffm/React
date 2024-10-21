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
          <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} />
        ))}
      </ul>
    </div>
  );
};

const TodoItem = ({ todo, onDelete }) => (
  <li>
    <span style={{ marginRight: '8px' }}>{todo}</span>
    <button onClick={onDelete}>Delete</button>
  </li>
);

export default TodoList;
