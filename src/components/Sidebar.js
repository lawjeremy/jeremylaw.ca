import React, { Component } from "react";
import Link from "gatsby-link";
import Button from "./Button";
import SocialLink from "./SocialLink";
import logo from "../assets/dark_logo.png";

import styles from "../scss/sidebar.module.scss";

class Sidebar extends Component {

  render() {

    const category = this.props.category;

    return (
      <aside>
        <section>

          <p>Canadian Software Developer building apps for the web, Android and iOS. I dabble in Game Development in my spare time.</p>
          
          <nav>
            <Link to="/">Blog</Link>
            <Link to="/web-dev">Web</Link>
            <Link to="/game-dev">Games</Link>
          </nav>

          <SocialLink />
          
        </section>
      </aside>
    );

  }
}

export default Sidebar;