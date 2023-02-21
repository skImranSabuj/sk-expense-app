import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { formatCurrency } from "../../utils/commonComputes";
import { getExpenseData } from "../../utils/expenseData";
import CategoryIcon from "../CategoryIcon";
import Text from "../Text";
import Title from "../Title";

const ActivityItem = ({ item, data }) => {
  return (
    <Stack>
      {data?.map((item, index) => (
        <Box
          className="flx-rsbc"
          style={{}}
          key={index}
          sx={{ borderBottom: "1px solid grey", py: 1 }}
        >
          <Box className="flx-rsbc">
            <CategoryIcon item={item} />
            <Box sx={{ ml: 2 }}>
              <Text>{item?.title || "Expense Item"}</Text>
            </Box>
          </Box>
          <Title size="sm" sx={{ color: "red" }}>
            {formatCurrency(item?.value)}
          </Title>
        </Box>
      ))}
    </Stack>
  );
};

export default ActivityItem;
