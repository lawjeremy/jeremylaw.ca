import React, { Component } from "react";
import Link from "gatsby-link"

class Header extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <header>
        <nav>
          <Link to="#">Link</Link>
          <Link to="#">Link</Link>
          <Link to="#">Link</Link>
        </nav>
      </header>
    );

  }
}

export default Header;