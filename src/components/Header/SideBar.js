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
import Image from "../Image";
import "./Header.css";
import { Icon } from "@iconify/react";
import MenuItem from "./MenuItem";
import settingsIcon from "../../assests/images/Setting.svg";
import logoutIcon from "../../assests/images/Logout.svg";
const logo = require("../../assests/images/em-logo.png");
const icon1 = require("../../assests/images/menu_1.png");
const icon2 = require("../../assests/images/menu_2.png");

const menuList = [
  {
    route: "expense-dashboard",
    icon: "ph:circles-four-duotone",
    isSelected: true,
  },
  { route: "menu-2", icon: "ph:star-bold" },
  { route: "menu-3", icon: "fluent:notepad-24-regular" },
  { route: "menu-4", icon: "charm:ticket" },
  { route: "setttings", icon: settingsIcon, svg: settingsIcon },
];

const logOutData = { svg: logoutIcon, isSelected: true };

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
      <Image src={logo} alt="Logo" className="logo" />
      <Box className="menuList">
        {menuList?.map((menuItem, index) => (
          <MenuItem item={menuItem} key={index} />
        ))}
      </Box>
      <Box sx={{ mb: 5 }}>
        <MenuItem item={logOutData} />
      </Box>
    </Box>
  );
};

export default SideBar;
