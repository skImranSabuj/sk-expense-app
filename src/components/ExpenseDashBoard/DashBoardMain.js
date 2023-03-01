import { Grid, Box, Avatar, IconButton } from "@mui/material";
import React from "react";
import { getCategories } from "../../utils/expenseData";
import AppButton from "../AppButton";
import AppCard from "../AppCard";
import Title from "../Title";
import AppBarBox from "./AppBarBox";
import CategoryCard from "./CategoryCard";
import downIcon from "../../assests/images/downIcon.png";
import userPhoto from "../../assests/images/userPhoto.png";
import LastMonthLogs from "./LastMonthLogs";
import Text from "../Text";
import CategoryIcon from "../CategoryIcon";
import { formatCurrency } from "../../utils/commonComputes";
import AppChart from "../AppChart";
import ExpenseCategories from "./ExpenseCategories";
import AppTextFiled from "../AppTextField/AppTextField";

const DashBoardMain = () => {
  const categoryList = getCategories();

  const user = {};
  return (
    <Box sx={{ width: "100%" }}>
      <AppBarBox className="flx-rsbc">
        <Box className="flx-rsbc">
          <Box>
            <AppTextFiled style={{ width: "25rem", height: "50px" }} />
            <AppButton style={{ height: "50px" }}>+ Add Expense</AppButton>
          </Box>
        </Box>
        <Box className="flx-rec">
          <Avatar
            style={{
              width: "50px",
              height: "50px",
              margin: "0 1rem",
              // marginLeft: "20%",
              // marginTop: "35%",
            }}
          >
            <img
              component="img"
              height="50px"
              width="50px"
              src={userPhoto}
              // src={user?.profileImage}
              alt="User Profile"
            />
          </Avatar>
          <IconButton>
            <img
              component="img"
              height="24px"
              width="24px"
              src={downIcon}
              alt="down"
            />
          </IconButton>
        </Box>
      </AppBarBox>
      <Box sx={{ width: "100%" }}>
        <Grid container sx={{ p: 2 }}>
          <Grid item xs={12} md={7} sx={{}}>
            <Box className="flx-rsbc" sx={{ pr: 5, mr: 5 }}>
              <Box>
                <Title size="sm">This week spend</Title>
                <Box className="flx-rsc">
                  {categoryList?.slice(0, 3).map((item, index) => (
                    <CategoryIcon item={item} sx={{ mx: 1 }} />
                  ))}
                </Box>
              </Box>
              <Box>
                <AppCard>
                  <Title>{formatCurrency(540)}</Title>
                  <Text>Total Spend</Text>
                </AppCard>
              </Box>
            </Box>
            <AppCard sx={{ pr: 5, mr: 5, mt: 2 }}>
              <AppChart />
            </AppCard>
          </Grid>
          <ExpenseCategories />
        </Grid>
        <Box sx={{ p: 2 }}>
          <Title size="sm">Last Month Activities</Title>
          <Text>Monthly Activities</Text>
          <br />
          <LastMonthLogs />
        </Box>
      </Box>
    </Box>
  );
};

export default DashBoardMain;
