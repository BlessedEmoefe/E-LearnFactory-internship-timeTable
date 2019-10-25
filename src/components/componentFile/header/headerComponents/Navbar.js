import React from 'react'
import styles from "../../../styles/navbar.module.css"
import RouterComponent from '../../routes/RouterComponent';

import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    NavLink
  } from "react-router-dom";

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
