import React from "react";
import NavLink from "./NavLink";
import Logo from "../img/logo2.png";
import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.Nav}>
      <NavLink to="/" className={styles.NavLink}>
        <img className={styles.Logo} src={Logo} alt="NC News Logo" />
      </NavLink>
    </nav>
  );
};

export default Nav;
