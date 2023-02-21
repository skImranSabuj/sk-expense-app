import { Typography } from "@mui/material";
import React from "react";

const Text = ({ children, variant = "body1" }) => {
  return <Typography variant={variant}>{children}</Typography>;
};

export default Text;
