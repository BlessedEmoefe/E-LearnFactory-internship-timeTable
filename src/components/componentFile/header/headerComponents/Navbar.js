import React from 'react'
import styles from "../../../styles/navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
           <ul className={styles.ul}>  

           <li>Home</li>
           <li>About</li>
           <li>FaQ</li>
           <li>Time-Table</li>
           <li>Profile</li>
           </ul>

        </div>
    )
}

export default Navbar;
