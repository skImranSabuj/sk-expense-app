import React from "react";

const Image = ({ src, alt = "em-photo", sx }) => {
  return <img src={src} alt={alt} style={{ ...sx }} className="logo" />;
};

export default Image;
