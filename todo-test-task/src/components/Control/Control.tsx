import ControlButton from '../UI/ControlButton/ControlButton';
import styles from './Control.module.css';

export interface IControlProps {
  children: string
  filter?: string
  handle: (filter?: string) => void
}

const Control = ({disableClearCompleted, clearCompleted, tasksLeft, filter, setFilter}) => {
  return (
    <div className={styles.control}>
        <span className={styles.status}>
          { tasksLeft ? `${tasksLeft} items left` : `no active tasks`} 
        </span>

        <div>
          <ControlButton handle={setFilter} filter={filter }>All</ControlButton>
          <ControlButton handle={setFilter} filter={filter}>Active</ControlButton>
          <ControlButton handle={setFilter} filter={filter}>Completed</ControlButton>
        </div>

        <ControlButton handle={clearCompleted} disabled={disableClearCompleted}>Clear completed</ControlButton>
    </div>
  )
}

export default Control
