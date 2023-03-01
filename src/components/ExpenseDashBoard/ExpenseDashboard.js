import React from "react";
import { getExpenseData } from "../../utils/expenseData";
import DashBoardMain from "./DashBoardMain";

import "./ExpenseDashboard.css";
import SideMenu from "./SideMenu";


export const expenseLoader = () => {
  const expenseData = getExpenseData();
};
const ExpenseDashboard = () => {
  return (
    <div className="expenseDashBoard" style={{ width: "100%" }}>
      <SideMenu />
      <DashBoardMain />
      {/* <SideMenu /> */}
      {/* <h2>This is dashboard</h2> */}
    </div>
  );
};

export default ExpenseDashboard;
