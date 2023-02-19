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
    <Drawer
      variant="permanent"
      open={openLeft}
      onMouseEnter={handleDrawerOpen}
      onMouseLeave={handleDrawerClose}
    >
      <DrawerHeader sx={{ backgroundColor: colors.primary }}></DrawerHeader>

      <Divider sx={{}} />
      <Tooltip title="My Profile" placement="right">
        <Button
          //   className={Styles.profileSection}
          //   onClick={handleGoToProfileEditor}
          sx={{
            padding: "5px",
            // ...appStyles.flexRowLeft,
            justifyContent: openLeft ? "flex-start" : "center",
          }}
        >
          {/* <Box > */}
          <Avatar
            style={{
              width: 60,
              height: 60,
              margin: !openLeft ? "0.5rem" : "0 1rem",
              // marginLeft: "20%",
              // marginTop: "35%",
            }}
          >
            <img
              //   component="img"
              height={60}
              width={60}
              //   src={user?.profileImage}
              alt="User Profile"
            />
          </Avatar>
          {true && (
            <Box>
              <Typography>Sabuj</Typography>
            </Box>
          )}
          {/* </Box> */}
        </Button>
      </Tooltip>

      <Divider />
    </Drawer>
  );
};

export default SideBar;
