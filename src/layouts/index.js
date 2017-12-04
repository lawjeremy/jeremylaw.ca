import React from "react"
import Link from "gatsby-link"
import styles from "./index.module.scss"
import logo from "../assets/dark_logo.png"
export default ({ children }) => (
  <div className={styles.container}>
    <header>
      <nav>
        <Link to="#">Link</Link>
        <Link to="#">Link</Link>
        <Link to="#">Link</Link>
      </nav>
    </header>
    <section className={styles.hero}>
      <img src={logo} alt="Jeremy Law" />
      <h3>Web and Mobile App Developer, Nerd, Human</h3>
    </section>
    <aside>
      <h2>Sidebar</h2>
    </aside>
    <content>
      {children()}
    </content>
    <footer>
      <h2>Footer</h2>
    </footer>
  </div>
)