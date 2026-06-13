import 'react';

import styles from "./buttons.module.css";
export function ButtonPrimary({copy, onClick}) {
    return (
        <button 
            onClick={() => onClick()}
            className = {styles.button_primary}
        >
            {copy}
        </button>
    )
}

export function ActionLink({copy, onClick}) {
    return <p className={styles.action_link} onClick={onClick}>{copy}</p>
}