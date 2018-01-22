import React, { Component } from "react";
import Link from "gatsby-link"
import Twitter from 'react-icons/lib/fa/twitter';
import Github from 'react-icons/lib/fa/github';
import Linkedin from 'react-icons/lib/fa/linkedin';
import Stackoverflow from 'react-icons/lib/fa/stack-overflow';
import styles from "../scss/socialLink.module.scss";

class SocialLink extends React.Component {

  render() {

    const category = this.props.category;

    return (
      <div className={styles.social}>
        <a href="https://twitter.com/lawjeremy">
          <Twitter color='black' size='20' />
        </a>
        <a href="https://github.com/lawjeremy">
          <Github color='black' size='20' />
        </a>
        <a href="https://ca.linkedin.com/in/lawjeremy">
          <Linkedin color='black' size='20' />
        </a>
        <a href="https://stackoverflow.com/users/362974/lawjeremy">
          <Stackoverflow color='black' size='20' />
        </a>
      </div>
    );

  }
}

export default SocialLink;