import styles from './Control.module.css';


const Control = ({toggleFilter, countCompleted, clearCompleted, itemsLeft, filter}) => {
  return (
    <div className={styles.control}>
        <span>
          { itemsLeft ? `${itemsLeft} items left` : `no active tasks`} 
        </span>

        <button onClick={e => toggleFilter(e)} value={'All'} disabled={'All' === filter}>All</button>
        <button onClick={toggleFilter} value={'Active'} disabled={'Active' === filter}>Active</button>
        <button onClick={toggleFilter} value={'Completed'} disabled={'Completed' === filter}>Completed</button>

        <button onClick={clearCompleted} disabled={countCompleted === 0}>Clear completed</button>
    </div>
  )
}

export default Control
