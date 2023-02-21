import { Icon } from "@iconify/react";
import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import "./Header.css";

const MenuItem = ({ item, svg, size = 24 }) => {
  const [selected, setSelected] = useState(item.isSelected);
  return (
    <Box className={`${selected ? "menuSelected" : ""} menuItem flx-rcc`}>
      <IconButton onClick={() => setSelected(true)}>
        {svg || item?.svg ? (
          <img
            src={item.svg}
            alt="React Logo"
            style={{ height: `${size}px`, width: `${size}px` }}
          />
        ) : (
          <Icon icon={item?.icon} width={size} />
        )}
      </IconButton>
    </Box>
  );
};

export default MenuItem;
