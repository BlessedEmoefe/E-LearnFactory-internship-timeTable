import React from 'react'
import styles from "../../../styles/login.module.css"
import LogInButton from "./LogInButton"

const Register = () => {
    return (
        <div className={styles.login}>

            <form className={styles.loginForm}>
                <label className={styles.label}>FullName</label>
                <input className={styles.input} type="text" />
                <label className={styles.label}>Username</label>
                <input className={styles.input} type="text" />
                <label className={styles.label}>E-mail</label>
                <input className={styles.input} type="e-mail" />
                <label className={styles.label}>Password</label>
                <input className={styles.input} type="password" />
                <label className={styles.label}>Confirm Password</label>
                <input className={styles.input} type="password" />
               <LogInButton>Sign Up</LogInButton>
            </form>

            </div>
    )
}

export default Register;