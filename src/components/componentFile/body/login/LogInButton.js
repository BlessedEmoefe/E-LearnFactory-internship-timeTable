import React from 'react'
import styles from "../../../styles/logInButton.module.css"

const LogInButton = (props) => {
    return (
        <div className={styles.buttonContainer}>
             <button className={styles.button} >{props.children}</button>
        </div>
    )
}

export default LogInButton;
