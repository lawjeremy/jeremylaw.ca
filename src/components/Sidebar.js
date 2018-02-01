import React, { Component } from "react";
import Link from "gatsby-link";
import Button from "./Button";
import SocialLink from "./SocialLink";

import styles from "../scss/sidebar.module.scss";

class Sidebar extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <aside>
        <h3>Headline</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ante lacus, dapibus vel eros a, lobortis facilisis dui. Suspendisse potenti.</p>
        <SocialLink />
        <Link to="game-dev">Game Dev</Link>
      </aside>
    );

  }
}

export default Sidebar;