import { ITodo } from '../../types/data';
import styles from './TodoItem.module.css';

export interface ITodoItemProps {
    todo: ITodo
    toggleComplete: (id: number) => void
    disabled: boolean
}

const TodoItem: React.FC<ITodoItemProps> = ({todo, toggleComplete}) => {

return (
    <li key={todo.id} className={styles.item}>
        <label className={[styles.label, (todo.isComplete ? styles.labelChecked : '')].join(' ')}>
            <input className={[styles.checkbox, (todo.isComplete ? styles.checkboxChecked : '')].join(' ')}
                type="checkbox" 
                checked={todo.isComplete} 
                onChange={() => toggleComplete(todo.id)}
            />
            <span className={styles.title}>{todo.title}</span>
        </label>
    </li>
    )
}

export default TodoItem
