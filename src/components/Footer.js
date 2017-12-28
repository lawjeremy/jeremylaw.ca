import React, { Component } from "react";
import SocialLink from "../components/SocialLink";
import styles from "./footer.module.scss";

class Footer extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <footer>
        <h2>&copy; Jeremy Law</h2>

        <SocialLink />

      </footer>
    );

  }
}

export default Footer;