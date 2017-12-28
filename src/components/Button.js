import React, { Component } from "react";
import styles from "./button.module.scss";

class Button extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <a href={this.props.href} className={styles.button}>{this.props.text}</a>
    );

  }
}

export default Button;