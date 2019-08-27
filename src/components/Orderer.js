import React from "react";
import styles from "./Orderer.module.css";

const Orderer = ({ setOrder }) => {
  return (
    <select className={styles.Dropdown} name="order" onChange={setOrder}>
      <option value="asc">Descending</option>
      <option value="desc">Ascending</option>
    </select>
  );
};

export default Orderer;
