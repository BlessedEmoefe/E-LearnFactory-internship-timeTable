import React, { Component } from 'react'
import HeaderContainer from "./header/HeaderContainer"
import styles from "../styles/container.module.css"


class Container extends Component {
    state = {  }
    render() { 
        return ( 
            <div className={styles.container}>
                <HeaderContainer />
            </div>
         );
    }
}
 
export default Container;