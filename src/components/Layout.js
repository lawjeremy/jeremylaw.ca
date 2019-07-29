import React from 'react';
import Link from 'gatsby-link';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Header from './Header';
import styles from '../scss/index.module.scss';
import logo from '../assets/dark_logo.png';
require('prismjs/themes/prism.css');

const Layout = ({ children }) => (
  <div className={styles.container}>
    <section className={styles.hero}>
      <Link to="/">
        <img src={logo} alt="Jeremy Law" />
      </Link>
      <h3>Software Developer, Nerd, Human</h3>
      <Header />
    </section>

    {/* <Sidebar /> */}

    <section className={styles.content}>{children}</section>

    <Footer />
  </div>
);

export default Layout;
