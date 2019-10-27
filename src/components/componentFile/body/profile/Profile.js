import React from 'react'
import HeaderContainer from '../../header/HeaderContainer';
import Footer from '../../footer/Footer';
import styles from "../../../styles/profile.module.css"

const Profile = () => {
    return (
        <div>
            <HeaderContainer/>
            <div className={styles.profile}>
                <div className={styles.left}>
        this is the right section
                </div>
                <div className={styles.right}>
                this is the left section
                </div>
            
            </div>
            <Footer/>
        </div>
    )
}

export default Profile;
