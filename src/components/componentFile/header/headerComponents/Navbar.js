import React from 'react'
import styles from "../../../styles/navbar.module.css"
import RouterComponent from '../../routes/RouterComponent';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
           <ul className={styles.ul}>  

           <RouterComponent />
           </ul>

        </div>
    )
}

export default Navbar;
