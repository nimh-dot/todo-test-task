import './App.css';
import { ITodo } from './types/data';
import { useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [value, setValue] = useState('');
  const [filter, setFilter] = useState('All');
  const inputRef = useRef<HTMLInputElement>(null);

  console.log(todos, value, filter);

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
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

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      setValue(e.target.value);
  }

  let displayTodos = todos;

  const toggleFilter: React.MouseEventHandler<HTMLButtonElement> = (event: React.MouseEvent<T, MouseEvent>) => {
    setFilter(event.target.value);
  }

  const toggleComplete = (taskId: number): void => {
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

  const clearCompleted: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTodos(todos.filter(todo => !todo.isComplete));
  }

  const itemsLeft = displayTodos.filter((todo) => !todo.isComplete).length; // use reduce
  const countCompleted = todos.filter((todo) => todo.isComplete).length; // use reduce

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
      <ul style={{minHeight: '200px'}}>
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
        <span>
          { itemsLeft ? `${itemsLeft} items left` : `no active tasks`} 
        </span>

        <button onClick={e => toggleFilter(e)} value={'All'} disabled={'All' === filter}>All</button>
        <button onClick={toggleFilter} value={'Active'} disabled={'Active' === filter}>Active</button>
        <button onClick={toggleFilter} value={'Completed'} disabled={'Completed' === filter}>Completed</button>

        <button onClick={clearCompleted} disabled={countCompleted === 0}>Clear completed</button>

      </div>
    </>
  )
}

export default App
