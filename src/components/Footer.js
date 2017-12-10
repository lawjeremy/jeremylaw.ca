import React, { Component } from "react";
import styles from "./button.module.scss";

class Footer extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <footer>
        <h2>Footer Component</h2>
      </footer>
    );

  }
}

export default Footer;