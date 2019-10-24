import React from 'react'
import LogInButton from "./LogInButton";
import styles from "../../../styles/login.module.css"
import Header from "../../header/HeaderContainer"
import Footer from "../../footer/Footer"
import TextSection from "./TextSection"

const Login = () => {
    return (
        <div >
            <Header />
            <div className={styles.login}>
            <TextSection />
            <form className={styles.loginForm}>
                <label className={styles.label}>Username</label>
                <input className={styles.input} type="text" />
                <label className={styles.label}>E-mail</label>
                <input className={styles.input} type="e-mail" />
                <label className={styles.label}>Password</label>
                <input className={styles.input} type="password" />
               <LogInButton>Login</LogInButton>
            </form>

            </div>
            <Footer />
        </div>
    )
}

export default Login;
