import React from 'react';
import Link from 'gatsby-link';
import { FaTwitter } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaStackOverflow } from 'react-icons/fa';
import styles from '../scss/socialLink.module.scss';

class SocialLink extends React.Component {
  render() {
    return (
      <div className={styles.social}>
        <Link to="https://twitter.com/lawjeremy">
          <FaTwitter color="black" size="20" />
        </Link>
        <Link to="https://github.com/lawjeremy">
          <FaGithub color="black" size="20" />
        </Link>
        <Link to="https://ca.linkedin.com/in/lawjeremy">
          <FaLinkedin color="black" size="20" />
        </Link>
        <Link to="https://stackoverflow.com/users/362974/lawjeremy">
          <FaStackOverflow color="black" size="20" />
        </Link>
      </div>
    );
  }
}

export default SocialLink;
