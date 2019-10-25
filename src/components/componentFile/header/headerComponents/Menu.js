import React from "react";
import styles from "../../../styles/menu.module.css";
import Container from "../../Container";
import About from "../../body/about/About";
import Login from "../../body/login/Login"
import SignUp from "../../body/login/Register"
import { BrowserRouter, Route, Switch,NavLink} from "react-router-dom";

const Menu = () => {
  return (
    <div className={styles.menu}>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/Login">Login</NavLink>
      <NavLink to="/SignUp">Sign-up</NavLink>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Container} exact={true} />
          <Route path="/about" component={About} />
          <Route path="/Login" component={Login} />
          <Route path="/SignUp" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Menu;
