import React from 'react';
import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaStackOverflow,
} from 'react-icons/fa';
import styles from '../scss/socialLink.module.scss';

class SocialLink extends React.Component {
  render() {
    return (
      <div className={styles.social}>
        <a href="https://twitter.com/LawJeremy">
          <FaTwitter color="black" size="20" />
        </a>
        <a href="https://github.com/lawjeremy">
          <FaGithub color="black" size="20" />
        </a>
        <a href="https://ca.linkedin.com/in/lawjeremy">
          <FaLinkedin color="black" size="20" />
        </a>
        <a href="https://stackoverflow.com/users/362974/lawjeremy">
          <FaStackOverflow color="black" size="20" />
        </a>
      </div>
    );
  }
}

export default SocialLink;
