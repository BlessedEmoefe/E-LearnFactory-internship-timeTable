import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  NavLink
} from "react-router-dom";
import Register from "../body/login/Register";
import Login from "../body/login/Login";
import styles from "../../styles/navlink.module.css"

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
      <div className={StyleSheet.navlink}>

      <NavLink to="/">Register</NavLink>
      <NavLink to="/login">Login</NavLink>
      </div>
        <Switch>
            <Route path="/" exact={true} component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/" component={Register} />
            <Route path="/" component={Register} />
            <Route path="/" component={Register} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default RouterComponent
