import React from "react";
import styles from "../componentsCSS/PageChanger.module.css";

const PageChanger = props => {
  const { p, finalPage, setPage } = props;
  return (
    <div className={styles.Pages}>
      <button
        className={styles.PrevPageButton}
        onClick={() => setPage(p + -1)}
        disabled={p === 1}
      >
        Previous Page
      </button>
      <p className={styles.PageNum}>Page: {p}</p>
      <button
        className={styles.NextPageButton}
        onClick={() => setPage(p + 1)}
        disabled={finalPage}
      >
        Next Page
      </button>
    </div>
  );
};

export default PageChanger;
