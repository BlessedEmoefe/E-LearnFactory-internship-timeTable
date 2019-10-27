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
                    <div className={styles.profileImg}>

                    </div>
                    <button className={styles.status}>Set Status</button>
                    <div className={styles.name}>
                        <p className={styles.realName}>Name</p>
                        <p className={styles.username}>Username</p>
                    </div>
                    <div className={styles.profileSection}>
                        <button className={styles.button}>Edit Profile</button>
                        <p className={styles.profileText}>I am a graduate of nigerian school</p>
                    </div>
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
