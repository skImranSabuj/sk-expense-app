import { Box, Paper } from "@mui/material";
import React from "react";
import Text from "../Text";
import CategoryIcon from "../../components/CategoryIcon.js";
import AppCard from "../../components/AppCard.js";

const CategoryCard = ({ item }) => {
  return (
    <AppCard
      sx={
        {
          // height: "5rem",
          // width: "5rem",
          // backgroundColor: "#F4F4F4",
        }
      }
      className="flx-rcc categoryCard"
    >
      <Box className="flx-ccc" sx={{}}>
        <CategoryIcon item={item} />
        <Box sx={{}} className="flx-ccc">
          <Text>{item?.catagory.toUpperCase() || "Expense Item"}</Text>
        </Box>
      </Box>
    </AppCard>
  );
};

export default CategoryCard;
