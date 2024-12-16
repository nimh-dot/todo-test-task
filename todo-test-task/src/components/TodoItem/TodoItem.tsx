import { ITodo } from '../../types/data';
import styles from './TodoItem.module.css';
import cn from 'classnames';

interface ITodoItemProps {
    todo: ITodo
    toggleComplete: (id: number) => void
}

const TodoItem: React.FC<ITodoItemProps> = ({todo, toggleComplete}) => {
    const inputClass = cn({
        [styles.checkbox]: true,
        [styles.checkboxChecked]: todo.isComplete
    })

    const labelClass = cn({
        [styles.label]: true,
        [styles.labelChecked]: todo.isComplete
    })

    return (
        <li className={styles.item}>
            <label className={labelClass}>
                <input className={inputClass}
                    type="checkbox" 
                    checked={todo.isComplete} 
                    onChange={() => {toggleComplete(todo.id)}}
                />
                <span className={styles.title}>{todo.title}</span>
            </label>
        </li>
    )
}

export default TodoItem
