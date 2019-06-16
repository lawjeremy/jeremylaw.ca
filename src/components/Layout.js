import React from 'react';
import Link from 'gatsby-link';
import Footer from './Footer';
import styles from '../scss/index.module.scss';
import logo from '../assets/dark_logo.png';
require('prismjs/themes/prism.css');

export default ({ children }) => (
  <div className={styles.container}>
    <section className={styles.hero}>
      <Link to="/">
        <img src={logo} alt="Jeremy Law" />
      </Link>
      <h3>Web and Mobile App Developer, Nerd, Human</h3>
    </section>

    {/* <Sidebar/> */}

    <section className={styles.content}>{children}</section>

    <Footer />
  </div>
);
