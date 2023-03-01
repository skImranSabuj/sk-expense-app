import React from "react";
import DashBoardMain from "./DashBoardMain";

import "./ExpenseDashboard.css";
import SideMenu from "./SideMenu";

const ExpenseDashboard = () => {
  return (
    <div className="expenseDashBoard" style={{ width: "100%" }}>
      <SideMenu />
      <DashBoardMain />
    </div>
  );
};

export default ExpenseDashboard;
