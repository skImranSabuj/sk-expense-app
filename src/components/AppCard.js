import { Paper } from "@mui/material";
import React from "react";

const AppCard = ({ children, sx, className }) => {
  return (
    <Paper
      sx={{ borderRadius: "25px", padding: "1rem", ...sx }}
      className={className}
    >
      {children}
    </Paper>
  );
};

export default AppCard;
