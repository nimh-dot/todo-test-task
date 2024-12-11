import { PropsWithChildren } from 'react';
import styles from './ControlButton.module.css';

interface IControlButtonProps extends PropsWithChildren {
    children: string
    filter?: string | null
    handleClick: React.MouseEventHandler<HTMLButtonElement> | React.Dispatch<React.SetStateAction<string>>
    disabled?: boolean | null
}

const ControlButton: React.FC<IControlButtonProps> = ({children, handleClick, disabled = null, filter = null}) => {

    return (
        <button 
            className={[styles.button, (filter === children ? styles.buttonActive : '')].join(' ')}
            onClick={() => {handleClick(children)}}
            disabled={disabled ? disabled : filter === children}
            >
            {children}
        </button>
    )
}

export default ControlButton
