import React from 'react'
import styles from "../../styles/footer.module.css"
import TopFooter from './footerComponents/TopFooter';
import BottomFooter from './footerComponents/BottomFooter';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <TopFooter />
            <BottomFooter/>
        </div>
    )
}

export default Footer;
