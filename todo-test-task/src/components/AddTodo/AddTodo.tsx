import { useState } from 'react';
import styles from './AddTodo.module.css';

interface IAddTodoProps {
    addTodo: (newTodo: string) => void;
}

const AddTodo: React.FC<IAddTodoProps> = ({addTodo}) => {
    const [newTask, setNewTask] = useState<string>('');

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter' && newTask.trim().length) {
            addTodo(newTask);
            setNewTask('');
        } 
    };

    return (
        <input className={styles.input}
            value={newTask} 
            type='text'
            placeholder='What needs to be done?'
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus={true}
        />
    )
}

export default AddTodo
