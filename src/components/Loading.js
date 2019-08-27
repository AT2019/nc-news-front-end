import React from "react";

const Loading = ({ text }) => {
  return (
    <>
      <div className="spinner" />
      <p>{text || "Loading..."}</p>
    </>
  );
};

export default Loading;
