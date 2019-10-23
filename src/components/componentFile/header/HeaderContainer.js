import React from 'react'
import styles from "../../styles/headerContainer.module.css";
import Menu from "./headerComponents/Menu"
import Logo from "./headerComponents/Logo"
import Navbar from "../header/headerComponents/Navbar"

const HeaderContainer = () => {
    return (
        <div className={styles.headerContainer}>
            <Logo />
            <Navbar />
           
        </div>
    )
}

export default HeaderContainer
