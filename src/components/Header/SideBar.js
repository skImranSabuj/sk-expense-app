import styled from "@emotion/styled";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { colors } from "../../utils/theme";
import "./Header.css";
const logo = require("../../assests/images/em-logo.png");
const icon1 = require("../../assests/images/menu_1.png");
const icon2 = require("../../assests/images/menu_2.png");

const menuList = [
  { route: "expense-dashboard", icon: icon1 },
  { route: "menu-2", icon: icon2 },
  { route: "menu-3", icon: icon2 },
  { route: "menu-4", icon: icon2 },
];

const SideBar = () => {
  const [openLeft, setOpenLeft] = useState(false);

  const handleDrawerOpen = () => {};
  const handleDrawerClose = () => {};

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  return (
    <Box className="sideBar">
      <img src={logo} alt="" className="logo" />
      <Box>
        {menuList?.map((menuItem, index) => (
          <Box key={index}>
            <img src={icon2} alt="" />
            {/* <img src={menuItem.logo} alt="" /> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SideBar;
