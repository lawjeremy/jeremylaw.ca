import React from "react"
import Button from "../components/Button"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import styles from "../scss/index.module.scss"
import logo from "../assets/dark_logo.png"

export default ({ children }) => (
  <div className={styles.container}>
   
    <section className={styles.hero}>
      <a href="/">
        <img src={logo} alt="Jeremy Law" />
      </a>
      <h3>Web and Mobile App Developer, Nerd, Human</h3>
    </section>
    
    <Sidebar/>

    <section className={styles.content}>
      {children()}
    </section>
   
    <Footer/>
  </div>
)