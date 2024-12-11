import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Control from './components/Control/Control';
import TodoList from './components/TodoList/TodoList';
import { ITodo } from './types/data';
import { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [filter, setFilter] = useState('All');

  const updateTodos = (newTodo: string) => {
    const NEW_TODOS = [...todos,{
      id: Date.now(),
      title: newTodo,
      isComplete: false
    }]

    setTodos(NEW_TODOS);
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

  const countCompleted = todos.filter((todo) => todo.isComplete).length; // use reduce
  const tasksLeft = useMemo(() => {
    console.log('call itemsLeft')
    return todos.reduce((active: number, task: ITodo) => !task.isComplete ? ++active : active, 0);
  }, [todos]);

  return (
    <>
      <h1>todos</h1>
      <AddTodo updateTodos={updateTodos}/>
      <TodoList displayTodos={displayTodos} toggleComplete={toggleComplete}/>
      <Control 
        toggleFilter={toggleFilter} 
        countCompleted={countCompleted} 
        clearCompleted={clearCompleted}
        itemsLeft={itemsLeft}
        filter={filter}
      />
    </>
  )
}

export default App
