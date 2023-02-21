import { Button } from "@mui/material";
import React from "react";

const AppButton = ({ bgColor = "#FFC248", color = "white", children }) => {
  return (
    <Button
      sx={{
        backgroundColor: bgColor,
        color: color,
        borderRadius: "12px",
        fontSize: 12,
        px: 2,
      }}
    >
      {children}
    </Button>
  );
};

export default AppButton;
