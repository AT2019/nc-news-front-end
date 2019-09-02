import React from "react";
import styles from "../componentsCSS/ErrorPage.module.css";

const ErrorPage = ({ text, err }) => {
  return (
    <div>
      <h1 className={styles.Error}>{text || "Something went wrong..."}</h1>
      {err && <p>{err.message}</p>}
    </div>
  );
};

export default ErrorPage;
