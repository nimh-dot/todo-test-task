import ControlButton from '../UI/ControlButton/ControlButton';
import styles from './Control.module.css';

interface IControlProps {
  filter?: string
  clearCompleted: React.MouseEventHandler<HTMLButtonElement>
  setFilter:  React.Dispatch<React.SetStateAction<string>>
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
          <ControlButton handleClick={setFilter} filter={filter }>All</ControlButton>
          <ControlButton handleClick={setFilter} filter={filter}>Active</ControlButton>
          <ControlButton handleClick={setFilter} filter={filter}>Completed</ControlButton>
        </div>

        <ControlButton handleClick={clearCompleted} disabled={disableClearCompleted}>Clear completed</ControlButton>
    </div>
  )
}

export default Control
