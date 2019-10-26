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
import HeaderContainer from "../header/HeaderContainer"
import Profile from "../body/profile/Profile"
import TimeTable from "../body/timeTable/TimeTable"

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/timeTable" component={TimeTable} />
            <Route path="/extra" component={Register} />

        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default RouterComponent
