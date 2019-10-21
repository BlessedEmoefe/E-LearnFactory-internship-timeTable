import React from 'react'
import styles from "./headerContainer.module.css";
import Menu from "./headerComponents/Menu"
import Logo from "./headerComponents/Logo"

const HeaderContainer = () => {
    return (
        <div className={styles.headerContainer}>
            <Logo />
           <Menu />
        </div>
    )
}

export default HeaderContainer
