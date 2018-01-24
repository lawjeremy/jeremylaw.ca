import React, { Component } from "react";
import Button from "./Button";
import SocialLink from "./SocialLink";

class Sidebar extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <aside>
        <h2>Sidebar</h2>
        <SocialLink />
        <Button href="http://google.com" text="Click Me" />
      </aside>
    );

  }
}

export default Sidebar;