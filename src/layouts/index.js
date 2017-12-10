import React from "react"
import Button from "../components/Button"
import Footer from "../components/Footer"
import Sidebar from "../components/Sidebar"
import Header from "../components/header"
import styles from "./index.module.scss"
import logo from "../assets/dark_logo.png"

export default ({ children }) => (
  <div className={styles.container}>
    <Header/>
    <section className={styles.hero}>
      <img src={logo} alt="Jeremy Law" />
      <h3>Web and Mobile App Developer, Nerd, Human</h3>
    </section>
    <Sidebar/>
    <content>
      {children()}
    </content>
    <Footer/>
  </div>
)