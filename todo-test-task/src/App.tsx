import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import TodoList from './components/TodoList/TodoList';
import Control from './components/Control/Control';
import { ITodo } from './types/data';
import { useCallback, useEffect, useState } from 'react';

const INITIAL_DATA: ITodo[] = [
  {
    id: 1,
    title: 'написать в телеграмм @bromleyby',
    isComplete: false
  },
  {
    id: 2,
    title: 'позвонить +7 (982) 8477432',
    isComplete: false
  },
  {
    id: 3,
    title: 'предложить оффер',
    isComplete: false
  },
];

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>(INITIAL_DATA);
  const [filter, setFilter] = useState('All');
  const [displayedTasks, setDisplayedTasks] = useState<ITodo[]>([]);

  const addTodo = useCallback((newTodo: string) => {
    const NEW_TODOS = [...todos,{
      id: Date.now(),
      title: newTodo,
      isComplete: false
    }]

    setTodos(NEW_TODOS);
  }, [todos])

  const toggleTaskCompleted = (taskId: number): void => {
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

  useEffect(() => {
    if (filter === 'All') {
      setDisplayedTasks(todos);
    } else {
      const displayTodos: ITodo[] = todos.filter(todo => {
        return todo.isComplete === (filter === 'Completed');
      });
      setDisplayedTasks(displayTodos);
    }
  }, [todos, filter]);

  const clearCompleted: React.MouseEventHandler<HTMLButtonElement> = () => {
    setTodos(todos.filter(todo => !todo.isComplete));
  }

  const tasksLeft = todos.reduce((active: number, task: ITodo) => !task.isComplete ? ++active : active, 0);

  return (
    <>
      <h1>todos</h1>
      <AddTodo addTodo={addTodo}/>
      <TodoList displayTodos={displayedTasks} toggleComplete={toggleTaskCompleted}/>
      <Control 
        tasksLeft={tasksLeft} 
        clearCompleted={clearCompleted}
        disableClearCompleted={tasksLeft === todos.length}
        filter={filter}
        setFilter={setFilter} 
      />
    </>
  )
}

export default App
