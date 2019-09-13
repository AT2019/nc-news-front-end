import React from "react";
import styles from "../componentsCSS/Orderer.module.css";

const Orderer = ({ onChange }) => {
  return (
    <select
      className={styles.Dropdown}
      id="order"
      onChange={e => onChange(e.target.value, "order")}
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
