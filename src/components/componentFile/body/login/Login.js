import React from 'react'
import styles from "../../../styles/login.module.css"

const Login = () => {
    return (
        <div className={styles.login}>
            <form className={styles.loginForm}>
                <label>FirstName</label>
                <input type="text" />
            </form>
        </div>
    )
}

export default Login;
