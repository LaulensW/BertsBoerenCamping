import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <div className="add-todo-container">
        <input type="text" id="newTodo" className="new-todo-input" />
        <button className="add-todo-button" onClick={() => addTodo(document.getElementById('newTodo').value)}>
          + Toevoegen
        </button>
      </div>
      {todos.map((todo, index) => (
        <div className="todo-item" key={index}>
          <span className="todo-text">{todo}</span>
          <button className="remove-button" onClick={() => removeTodo(index)}>
            Verwijder
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
