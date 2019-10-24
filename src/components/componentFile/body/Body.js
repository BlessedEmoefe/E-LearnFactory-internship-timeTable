import React from 'react'
import styles from  "../../styles/body.module.css"
import LoginRegister from "./login/LoginRegister"

const Body = () => {
    return (
        <div className={styles.body}>
            <LoginRegister />
        </div>
    )
}

export default Body;
