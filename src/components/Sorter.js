import React from "react";
import styles from "../componentsCSS/Sorter.module.css";

const Sorter = ({ setSort }) => {
  return (
    <select
      className={styles.Select}
      id="sort"
      onChange={e => this.handleChange(e.target.value, "sort")}
    >
      <option value="created_at">Date</option>
      <option value="comment_count">Comments</option>
      <option value="votes">Votes</option>
    </select>
  );
};

export default Sorter;
