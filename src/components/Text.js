import { Typography } from "@mui/material";
import React from "react";

const Text = ({ children, variant = "body1", sx }) => {
  return (
    <Typography variant={variant} sx={{ fontSize: "12px", ...sx }}>
      {children}
    </Typography>
  );
};

export default Text;
