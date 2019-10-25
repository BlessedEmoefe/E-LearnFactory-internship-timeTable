import React from 'react'
import styles from "../../../styles/login.module.css"
import LogInButton from "./LogInButton"
import registerStyle from "../../../styles/register.module.css"
import Header from "../../header/HeaderContainer"
import Footer from "../../footer/Footer"
import TextSection from "./TextSection"



const Register = () => {
    return (
        <div>

            <Header />
        <div className={styles.login}>

            <TextSection words="Sign-Up to get Updates and current information on the progress of the internship"/>

            <form className={styles.loginForm}>
                <label className={styles.label}>FullName</label>
                <input className={styles.input} type="text" />
                <label className={styles.label}>Username</label>
                <input className={styles.input} type="text" />
                <label className={styles.label}>E-mail</label>
                <input className={styles.input} type="e-mail" />
                <label className={styles.label}>Password</label>
                <input className={styles.input} type="password" />
                <p className={registerStyle.passwordAdvice}>Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
                <label className={styles.label}>Confirm Password</label>
                <input className={styles.input} type="password" />
               <LogInButton>Sign Up</LogInButton>
            </form>
            </div>
            <Footer />
        </div>
    )
}

export default Register;