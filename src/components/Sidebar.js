import React, { Component } from "react";
import Link from "gatsby-link";
import Button from "./Button";
import SocialLink from "./SocialLink";

class Sidebar extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <aside>
        <SocialLink />
        <Link to="game-dev" />
      </aside>
    );

  }
}

export default Sidebar;