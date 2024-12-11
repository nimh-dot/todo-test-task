import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';
import { ITodo } from '../../types/data';
import { PropsWithChildren } from 'react';

interface ITodoListProps extends PropsWithChildren {
  displayTodos: ITodo[];
  toggleComplete: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({displayTodos, toggleComplete}) => {
  return (
    <ul className={styles.todo__list}>
        {displayTodos.map((todo) => (
        
          <TodoItem key={todo.id} 
            todo={todo} 
            toggleComplete={toggleComplete}
          />
        ))}
      </ul>
  )
}

export default TodoList
