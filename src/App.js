import React, { useState } from 'react';
import { FaCheckCircle, FaTrash } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoInput, setTodoInput] = useState('');
  const [dueDate, setDueDate] = useState(new Date());

  const handleAddTodo = () => {
    if (todoInput.trim() === '') return;
    setTodoList([
      ...todoList,
      { id: Date.now(), text: todoInput, dueDate: dueDate }
    ]);
    setTodoInput('');
  };

  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="input-container">
        <input type="text" value={todoInput} onChange={(e) => setTodoInput(e.target.value)} placeholder="Enter a todo..." />
        <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul className="todo-list">
        {todoList.map(todo => (
          <li key={todo.id}>
            <div>
              <FaCheckCircle className="check-icon" />
              <span>{todo.text}</span>
              <span className="due-date">{new Date(todo.dueDate).toLocaleDateString()}</span>
            </div>
            <div>
              <FaTrash className="delete-icon" onClick={() => handleDeleteTodo(todo.id)} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
