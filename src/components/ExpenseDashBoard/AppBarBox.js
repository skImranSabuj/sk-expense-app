import { Box } from "@mui/material";
import React from "react";
import Text from "../Text";

const AppBarBox = ({ children, sx, className }) => {
  return (
    <Box className={`appBarBox ${className}`} sx={{ ...sx }}>
      {/* <Text>App Bar box</Text> */}
      {children}
    </Box>
  );
};

export default AppBarBox;
