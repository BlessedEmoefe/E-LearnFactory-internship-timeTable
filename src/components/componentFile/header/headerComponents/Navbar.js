import React from 'react'
import styles from "../../../styles/navbar.module.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
           <ul className={styles.ul}>  

           <li className={styles.links}><NavLink to="/profile">Profile</NavLink></li>
           <li className={styles.links}><NavLink to="/timeTable">Time-Table</NavLink></li>
           <li className={styles.links}>Extra</li>
           <li className={styles.links}><NavLink to="/">Register</NavLink></li>
           <li className={styles.links}><NavLink to="/login">Login</NavLink></li>
           </ul>

        </div>
    )
}

export default Navbar;
