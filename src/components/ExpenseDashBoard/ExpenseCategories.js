import { Box, Grid } from "@mui/material";
import React from "react";
import { getCategories } from "../../utils/expenseData";
import AppButton from "../AppButton";
import AppCard from "../AppCard";
import Title from "../Title";
import CategoryCard from "./CategoryCard";

const ExpenseCategories = () => {
  const categoryList = getCategories();
  return (
    <Grid item xs={12} md={5}>
      <AppCard sx={{ backgroundColor: "FFFFFF" }}>
        <Box className="flx-rsbc">
          <Title size="sm">Categories</Title>
          <AppButton>+ Add </AppButton>
        </Box>
        <hr />
        <Grid container>
          {categoryList?.map((item, index) => (
            <Grid
              item
              xs={4}
              md={4}
              key={index}
              sx={{ p: 1 }}
              className="flx-rcc"
            >
              <CategoryCard item={item} />
            </Grid>
          ))}
        </Grid>
      </AppCard>
    </Grid>
  );
};

export default ExpenseCategories;