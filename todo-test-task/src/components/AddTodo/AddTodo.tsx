import { useRef, useState } from 'react';
import styles from './AddTodo.module.css';


const AddTodo = ({updateTodos}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [newTask, setNewTask] = useState('');

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === 'Enter' && newTask.length) { //trim length
            updateTodos(newTask);
            setNewTask('');
        } 
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setNewTask(e.target.value);
    }

    return (
        <input className={styles.input}
        value={newTask} 
        type='text'
        placeholder='What needs to be done?'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
        autoFocus={true}
      />
    )
}

export default AddTodo
