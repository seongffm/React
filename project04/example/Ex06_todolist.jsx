import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const addTodo = () => {
    if (!todoInput.trim()) return;
    setTodos([...todos, todoInput]);
    setTodoInput('');
  };

  const deleteTodo = index => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={todoInput}
          onChange={e => setTodoInput(e.target.value)}
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
