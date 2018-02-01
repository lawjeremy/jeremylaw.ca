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
        <p>Canadian Software Developer building apps for the web, Android and iOS. I dabble in Game Development in my spare time.</p>
        <SocialLink />
        <Link to="/">Blog</Link>
        <Link to="web-dev">Web</Link>
        <Link to="game-dev">Games</Link>
      </aside>
    );

  }
}

export default Sidebar;