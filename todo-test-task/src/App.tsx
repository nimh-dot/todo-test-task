import './App.css';
import { ITodo } from './types/data';
import { ChangeEventHandler, KeyboardEventHandler, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('All');
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(todos, value, filter);

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
      if (e.key === 'Enter' && value.length) { //trim length
        const NEW_TODOS = [...todos,{
          id: Date.now(),
          title: value,
          isComplete: false
        }]

        setTodos(NEW_TODOS);
        setValue('');
      } 
  }

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value);
  }

  let displayTodos = todos;

  const toggleFilter = (e) => {
    setFilter(e.target.value);
  }

  const toggleComplete = (taskId: number) => {
    setTodos([...todos.map((todo) => {
      if (todo.id === taskId) {
        return {
          id: todo.id,
          title: todo.title,
          isComplete: !todo.isComplete,
        }}
        return todo;
    })]);
  }

  if (filter !== 'All') {
    displayTodos = todos.filter(todo => {
      return todo.isComplete === (filter === 'Completed');
    });
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.isComplete));
  }

  return (
    <>
      <h1>todos</h1>
      <input 
        value={value} 
        type='text'
        placeholder='What needs to be done?'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        autoFocus={true}
      />
      <ul>
        {displayTodos.map((todo) => (
          <li key={todo.id}>
            <label>
            {todo.title}
              <input 
                  type="checkbox" 
                  checked={todo.isComplete} 
                  onChange={() => toggleComplete(todo.id)}
              />
            </label>
          </li>
        ))}
      </ul>
      <div>
        <span>{
          displayTodos.filter((todo) => !todo.isComplete).length
          } items left
        </span>

        <button onClick={e => toggleFilter(e)} value={'All'}>All</button>
        <button onClick={toggleFilter} value={'Active'}>Active</button>
        <button onClick={toggleFilter} value={'Completed'}>Completed</button>

        <button onClick={clearCompleted}>Clear completed</button>

      </div>
    </>
  )
}

export default App
