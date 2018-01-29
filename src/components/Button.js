import React, { Component } from "react";
import Link from "gatsby-link";
import styles from "../scss/button.module.scss";

class Button extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <Link to={this.props.href} className={styles.button}>{this.props.text}</Link>
    );

  }
}

export default Button;