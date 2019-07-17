import React from "react";

const Sorter = ({ setSort }) => {
  console.log("in Sorter");
  return (
    <select onChange={setSort}>
      <option value="created_at">Date</option>
      <option value="comment_count">Most Talked About</option>
      <option value="votes">Most Popular</option>
    </select>
  );
};

export default Sorter;
