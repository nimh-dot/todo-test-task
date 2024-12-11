import styles from './ControlButton.module.css';

export interface IControlButtonProps {
    children: string
    filter?: string | null
    handle: (filter?: string | null) => void
    disabled?: boolean | null
}

const ControlButton: React.FC<IControlButtonProps> = ({children, handle, disabled = null, filter = null}) => {
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
