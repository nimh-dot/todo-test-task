import styles from './TodoItem.module.css';

const TodoItem = ({todo, toggleComplete}) => {

return (
    <li key={todo.id} className={styles.todo__item}>
        <label>
            <input className={styles.todo__input}
                type="checkbox" 
                checked={todo.isComplete} 
                onChange={() => toggleComplete(todo.id)}
            />
            {todo.title}
        </label>
    </li>
    )
}

export default TodoItem
