import styles from './ControlButton.module.css';

export interface IControlButtonProps {
    children: string
    filter?: string
    handle: (filter?: string) => void
    disabled?: boolean
}

const ControlButton: React.FC<IControlButtonProps> = ({children, handle, disabled, filter}) => {
    return (
        <button className={[styles.button, (filter === children ? styles.buttonActive : '')].join(' ')}
            onClick={() => {handle(children)}}
            disabled={disabled ? disabled : filter === children}
        >
        {children}
        </button>
    )
}

export default ControlButton
