import React, { Component } from 'react'
import styles from "../../../styles/loginRegister.module.css"
import Login from "./Login"
import Register from "./Register"


class LoginRegister extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <Login />
            <Register />
            </div>

         );
    }
}
 
export default LoginRegister;