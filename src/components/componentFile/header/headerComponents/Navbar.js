import React from 'react'
import styles from "../../../styles/navbar.module.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
           <ul className={styles.ul}>  

           <li><NavLink to="/profile">Profile</NavLink></li>
           <li><NavLink to="/timeTable">Time-Table</NavLink></li>
           <li>Extra</li>
           <li><NavLink to="/">Register</NavLink></li>
           <li><NavLink to="/login">Login</NavLink></li>
           </ul>

        </div>
    )
}

export default Navbar;
