import { Box } from "@mui/material";
import React from "react";
import { getDateTimeStamp } from "../../utils/commonComputes";
import { colors } from "../../utils/theme";
import AppCard from "../AppCard";
import Text from "../Text";
import Title from "../Title";
import AppBarBox from "./AppBarBox";
import walletIcon from "../../assests/images/Wallet.svg";
import ActivityItem from "./ActivityItem";

export const balance = {
  value: 55586,
  lastModifiedDateTimeStamp: getDateTimeStamp(),
};

const SideMenu = () => {
  return (
    <div className="sideMenu">
      <AppBarBox>
        <Title sx={{}}>Kösten</Title>
        <Text>Expense manager</Text>
      </AppBarBox>
      <AppCard
        className="balanceCard"
        sx={{ backgroundColor: colors.orange, px: 5, py: 2 }}
      >
        <Text>Current Balance</Text>
        <Box className="flx-rsc">
          <img
            src={walletIcon}
            alt="React Logo"
            style={{ height: `${78}px`, width: `${71}px` }}
          />
          <Box sx={{ px: 2 }}>
            <Title sx={{ lineHeight: "42.19px" }} size="lg">
              {balance?.value}
            </Title>
            <Text>Total Expense</Text>
          </Box>
        </Box>
      </AppCard>

      <Box>
        <Text>Latest Activity</Text>
        <hr />
        {["Today", "Yesterday"].map((item) => (
          <Box key={item}>
            <Text>{item}</Text>
            <Box>
              <ActivityItem />
            </Box>
          </Box>
        ))}

        <hr />
      </Box>
    </div>
  );
};

export default SideMenu;
