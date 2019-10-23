import React, { Component } from "react";
import HeaderContainer from "./header/HeaderContainer";
import styles from "../styles/container.module.css";
import Footer from "./footer/Footer"
import Body from "./body/Body"

class Container extends Component {
  state = {};
  render() {
    return (
      <div className={styles.container}>
        <HeaderContainer />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default Container;
