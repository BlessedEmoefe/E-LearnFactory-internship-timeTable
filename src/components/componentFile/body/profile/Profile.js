import React from 'react'
import HeaderContainer from '../../header/HeaderContainer';
import Footer from '../../footer/Footer';
import styles from "../../../styles/profile.module.css"

const Profile = () => {
    return (
        <div>
            <HeaderContainer/>
            <div className={styles.profile}>

            this is the Profile page
            </div>
            <Footer/>
        </div>
    )
}

export default Profile;
