import React from "react";
import { Link } from "@reach/router";
import NavLink from "./NavLink";
import Logo from "../img/logo2.png";
import Football from "../img/football.png";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <NavLink className={styles.Nav} to="/">
        <img className={styles.Logo} src={Logo} alt="NC News Logo" />
        <Link to="/topic/cooking">
          <button className={styles.Button}>Cooking</button>
        </Link>
        <Link to="/topic/football">
          <button className={styles.Button}>Football</button>
        </Link>
        <Link to="/topic/coding">
          <button className={styles.Button}>Coding</button>
        </Link>
      </NavLink>
    </nav>
  );
};

export default Nav;
