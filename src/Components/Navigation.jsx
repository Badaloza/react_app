import React from "react";
import { Link } from "react-router-dom";
import styles from "./navigation.module.css";
import "./bgImage.jpg"

function Navigation() {
  return (
    <>
    <div className={styles.navigation}>
    <h1>Amazon</h1>
    <div className={`${styles.navigationButtonContainer}`}>
      <Link to="/">
        <button className={styles.navigationButton}>Login/Register</button>
      </Link>
      <Link to="/contact">
        <button className={styles.navigationButton}>Cart</button>
      </Link>
    </div>
    </div>
    <div className={styles.option}>
        <h4>PRODUCT List</h4>
    <section>
    <div>
      <Link to="/mobilePage">
        <button className={styles.optionButton}>Mobile</button>
      </Link>
      <Link to="/laptopPage">
        <button className={styles.optionButton}>Laptop</button>
      </Link>
      <Link to="/chargerPage">
        <button className={styles.optionButton}>Charger</button>
      </Link>
      <Link to="/electronicsPage">
        <button className={styles.optionButton}>Electronics</button>
      </Link>
      <Link to="/tvPage">
        <button className={styles.optionButton}>TV</button>
      </Link>
      <Link to="/bestsellerPage">
        <button className={styles.optionButton}>Best Sellers</button>
      </Link>

    </div>
    </section>
    <div>
      <Link to="/customerPage">
        <button className={styles.optionButton}>Customer Service</button>
      </Link>
      <Link to="/contactPage">
        <button className={styles.optionButton}>Contact</button>
      </Link>
    </div>
    </div>
    </>
  );
}

export default Navigation;
