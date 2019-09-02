import React from "react";
import Spinner from "react-spinner-material";
import styles from "../componentsCSS/Loading.module.css";

const Loading = ({ text }) => {
  return (
    <>
      <p className={styles.Loading}>{text || "Loading..."}</p>
      <Spinner
        size={120}
        spinnerColor={"#333"}
        spinnerWidth={2}
        visible={true}
      />
    </>
  );
};

export default Loading;
