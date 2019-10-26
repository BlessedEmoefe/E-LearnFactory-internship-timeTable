import React from 'react'
import styles from "../../../styles/topFooter.module.css"
import LFLOGO from "../../../../assets/photos/LFLOGO.png"

const TopFooter = () => {
    return (
        <div className={StyleSheet.topFooter}>
            <p className={styles.paragraph}>this is a man</p>
            <img src={LFLOGO} className={styles.img}/>
            <p className={styles.paragraph}>this is a man</p>
        </div>
    )
}

export default TopFooter;
