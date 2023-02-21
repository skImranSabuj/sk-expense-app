import { Typography } from "@mui/material";
import React from "react";

const Title = ({ children, variant = "h6", size = "md", sx }) => {
  const styles = {
    lg: {
      fontWeight: "600",
      fontSize: "36px",
    },
    md: {
      fontWeight: "600",
      fontSize: "28px",
    },
  };
  return (
    <Typography variant={variant} sx={{ ...styles[size], ...sx }}>
      {children}
    </Typography>
  );
};

export default Title;
