import { Box } from "@mui/material";
import React from "react";

const ChartBar = ({ height = 0, color = "#4707E8" }) => {
  const getHeight = (len) => {
    return `${len}%`;
  };

  let length = height >= 100 ? 100 : height;
  return (
    <Box sx={{ height: 200, position: "relative", borderRadius: "0.5rem" }}>
      <Box
        sx={{
          height: getHeight(length),
          width: "2rem",
          backgroundColor: color,
          position: "absolute",
          bottom: 0,
          borderRadius: "0.5rem",
        }}
      ></Box>
    </Box>
  );
};

export default ChartBar;
