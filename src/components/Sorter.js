import React from "react";
import styles from "./Sorter.module.css";

const Sorter = ({ setSort }) => {
  return (
    <select className={styles.Select} onChange={setSort}>
      <option value="created_at">Date</option>
      <option value="comment_count">Comments</option>
      <option value="votes">Votes</option>
    </select>
  );
};

export default Sorter;
