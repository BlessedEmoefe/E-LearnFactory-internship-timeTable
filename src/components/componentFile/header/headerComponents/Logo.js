import React from 'react'
import LEARNFACTORY from "../../../../assets/photos/LEARNFACTORY.png"
import styles from "../../../styles/logo.module.css"

const Logo = () => {
    return (
        <div className={styles.logoSection}>
             <img src={LEARNFACTORY} className={styles.logo} alt="this"/>
        </div>
    )
}

export default Logo;
