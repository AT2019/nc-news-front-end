import React from "react";
import styles from "../componentsCSS/Orderer.module.css";

const Orderer = ({ setOrder }) => {
  return (
    <select
      className={styles.Dropdown}
      id="order"
      onChange={e => this.handleChange(e.target.value, "order")}
    >
      <option id="asc" value="asc">
        Ascending
      </option>
      <option id="desc" value="desc">
        Descending
      </option>
    </select>
  );
};

export default Orderer;
