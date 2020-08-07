import React from "react";

const Validation = ({ txtLength }) => {
  let length = txtLength;
  let mainContent;
  if (length > 5) {
    mainContent = <p>Text Too long</p>;
  } else {
    mainContent = <p>Text Too short</p>;
  }
  return <div>{mainContent}</div>;
};

export default Validation;
