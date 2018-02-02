import React from "react";
import Link from "gatsby-link";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import SocialLink from "../components/SocialLink";
import Header from "../components/Header";
import styles from "../scss/index.module.scss";
import logo from "../assets/dark_logo.png";
require("prismjs/themes/prism.css");

export default ({ children }) => (
  
  <div className={styles.container}>
   
    <section className={styles.hero}>
      <Link to="/">
        <img src={logo} alt="Jeremy Law" />
      </Link>
      <h3>Web and Mobile App Developer, Nerd, Human</h3>
    </section>
    
    <Sidebar/>

    <section className={styles.content}>
      {children()}
    </section>
   
    <Footer/>
  </div>
)