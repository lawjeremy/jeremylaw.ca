import React, { Component } from "react";
import Button from "./Button";

class Sidebar extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <aside>
        <h2>Sidebar</h2>
        <Button href="http://google.com" text="Click Me" />
      </aside>
    );

  }
}

export default Sidebar;