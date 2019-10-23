import React from 'react'
import styles from  "../../styles/body.module.css"
import Login from "../body/login/Login"

const Body = () => {
    return (
        <div className={styles.body}>
         <Login />
        </div>
    )
}

export default Body;
