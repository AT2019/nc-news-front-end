import React from "react";
import { Link } from "@reach/router";
import Logo from "../img/logo2.png";
import styles from "../componentsCSS/Nav.module.css";

const Nav = props => {
  return (
    <nav className={styles.Nav}>
      <Link to="/">
        <img className={styles.Logo} src={Logo} alt="NC News Logo" />
      </Link>
      <Link to="/topic/cooking">
        <button className={styles.Button}>Cooking</button>
      </Link>
      <Link to="/topic/football">
        <button className={styles.Button}>Football</button>
      </Link>
      <Link to="/topic/coding">
        <button className={styles.Button}>Coding</button>
      </Link>
      <Link to="/">
        <button className={styles.Button}>Homepage</button>
      </Link>
      <p className={styles.Ptag}>Logged in as: {props.loggedInUser}</p>
    </nav>
  );
};

export default Nav;
