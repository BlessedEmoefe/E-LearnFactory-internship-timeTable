import React from 'react'
import styles from "../../../styles/navbar.module.css"
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className={styles.navbar}>
           <ul className={styles.ul}>  

           <li><NavLink to="/">Register</NavLink></li>
           <li><NavLink to="/login">Login</NavLink></li>
           <li>FaQ</li>
           <li>Time-Table</li>
           <li>Profile</li>
           </ul>

        </div>
    )
}

export default Navbar;
