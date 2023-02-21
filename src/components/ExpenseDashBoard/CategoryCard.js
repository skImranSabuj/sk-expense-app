import { Box, Paper } from "@mui/material";
import React from "react";
import Text from "../Text";
import CategoryIcon from "../../components/CategoryIcon.js";
import AppCard from "../../components/AppCard.js";

const CategoryCard = ({ item }) => {
  return (
    <AppCard
      sx={{ height: "64px", width: "64px", backgroundColor: "#F4F4F4" }}
      className="flx-rcc"
    >
      <Box className="flx-rcc">
        <Box className="flx-ccc">
          <CategoryIcon item={item} />
          <Box sx={{}} className="flx-ccc">
            <Text>{item?.catagory.toUpperCase() || "Expense Item"}</Text>
          </Box>
        </Box>
      </Box>
    </AppCard>
  );
};

export default CategoryCard;
