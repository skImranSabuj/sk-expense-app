import { Icon } from "@iconify/react";
import { Box } from "@mui/material";
import React from "react";
import "./Header.css";

const MenuItem = ({ item, svg }) => {
  return (
    <Box
      className={`${item.isSelected ? "menuSelected" : ""} menuItem flx-r-c`}
    >
      {svg || item?.svg ? (
        <img src={item.svg} alt="React Logo" />
      ) : (
        <Icon icon={item?.icon} width={24} />
      )}
    </Box>
  );
};

export default MenuItem;
