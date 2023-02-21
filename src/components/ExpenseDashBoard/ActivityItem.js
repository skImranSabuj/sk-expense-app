import { Box } from "@mui/material";
import React from "react";
import { formatCurrency } from "../../utils/commonComputes";
import CategoryIcon from "../CategoryIcon";
import Text from "../Text";
import Title from "../Title";

const ActivityItem = ({ item }) => {
  return (
    <Box className="flx-rcc">
      <CategoryIcon />
      <Text>{item?.title || "Expense Item"}</Text>
      <Title>{formatCurrency(item?.value)}</Title>
    </Box>
  );
};

export default ActivityItem;
