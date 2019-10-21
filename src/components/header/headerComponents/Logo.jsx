import React from 'react'
import LEARNFACTORY from "../../../assets/photos/LEARNFACTORY.png"
import styles from "./logo.module.css"

const Logo = () => {
    return (
        <div className={styles.logoSection}>
             <img src={LEARNFACTORY} className={styles.logo}/>
        </div>
    )
}

export default Logo;
