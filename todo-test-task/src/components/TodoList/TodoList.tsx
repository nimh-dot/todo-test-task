import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({displayTodos, toggleComplete}) => {
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
