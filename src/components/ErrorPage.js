import React from "react";

const ErrorPage = ({ text, err }) => {
  return (
    <div>
      <h1>{text || "Something went wrong..."}</h1>
      {!!err && <p>{err.message}</p>}
    </div>
  );
};

export default ErrorPage;
