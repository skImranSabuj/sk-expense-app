import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import React from "react";
import "./Header.css";

const MenuItem = ({ item, svg, size = 24 }) => {
  return (
    <Box
      className={`${item.isSelected ? "menuSelected" : ""} menuItem flx-rcc`}
    >
      {svg || item?.svg ? (
        <img
          src={item.svg}
          alt="React Logo"
          style={{ height: `${size}px`, width: `${size}px` }}
        />
      ) : (
        <Icon icon={item?.icon} width={size} />
      )}
    </Box>
  );
};

export default MenuItem;
