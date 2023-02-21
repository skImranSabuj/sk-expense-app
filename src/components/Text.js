import { Typography } from "@mui/material";
import React from "react";

const Text = ({ children, variant = "body1", sx }) => {
  return (
    <Typography variant={variant} sx={{ ...sx }}>
      {children}
    </Typography>
  );
};

export default Text;
