import { Box, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategories } from "../../utils/expenseData";
import AppButton from "../AppButton";
import AppCard from "../AppCard";
import AppTextFiled from "../AppTextField/AppTextField";
import Title from "../Title";
import CategoryCard from "./CategoryCard";

const ExpenseCategories = () => {
  // const categoryList = getCategories();

  const {
    isLoading,
    error,
    data: categoryList,
  } = useQuery({
    queryKey: ["categoryList"],
    queryFn: getCategories,
  });

  return (
    <Grid item xs={12} md={5}>
      <AppCard sx={{ backgroundColor: "FFFFFF" }}>
        <Box className="flx-rsbc">
          <Title size="sm">Categories</Title>
          <Box>
            <AppTextFiled />
            <AppButton>+ Add </AppButton>
          </Box>
        </Box>
        <hr />
        <Grid container>
          {!isLoading ? (
            categoryList?.map((item, index) => (
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
            ))
          ) : (
            <AppCard>Loading..</AppCard>
          )}
        </Grid>
      </AppCard>
    </Grid>
  );
};

export default ExpenseCategories;
