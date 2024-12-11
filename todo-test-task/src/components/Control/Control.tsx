import { PropsWithChildren } from 'react';
import ControlButton from '../UI/ControlButton/ControlButton';
import styles from './Control.module.css';

interface IControlProps extends PropsWithChildren {
  children: string
  filter?: string
  clearCompleted: (filter?: string | null) => void
  setFilter: (filter?: string | null) => void
  disableClearCompleted: boolean
  tasksLeft: number
}

const Control: React.FC<IControlProps> = ({
    disableClearCompleted, 
    clearCompleted, 
    tasksLeft, 
    filter, 
    setFilter
  }) => {

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
